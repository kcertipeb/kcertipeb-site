/**
 * Enregistre un rendez-vous de visite.
 *
 *   POST /.netlify/functions/create-booking
 *   { propertyType, surfaceRange, units, street, houseNumber, postalCode,
 *     date: "2026-09-23", time: "09:00", name, email, phone, message }
 *
 * Seuls les biens situés en Région de Bruxelles-Capitale sont acceptés (code postal).
 *
 * Rien de ce qu'envoie le navigateur n'est pris pour argent comptant : la durée du bloc,
 * le prix et la légalité du créneau sont recalculés ici. Le garde-fou contre la double
 * réservation est la contrainte d'exclusion de la base, pas cette validation.
 *
 * Ordre volontaire : on insère d'abord en base — c'est ce qui verrouille le créneau — et on
 * crée l'événement Outlook ensuite. Si Outlook échoue, le rendez-vous existe quand même et
 * le créneau reste bloqué ; l'inverse laisserait un trou.
 */

import nodemailer from 'nodemailer';

import {
  getBlockMinutes,
  getBookingStatus,
  getBrusselsCommune,
  getPriceValue,
  isBookableOnline,
  MAX_UNITS,
} from '../shared/booking-rules.js';
import { createCertiflowDossier, isCertiflowConfigured } from '../shared/certiflow.js';
import { brusselsToUtc, generateCandidateSlots, getBookingConfig } from '../shared/datetime.js';
import { createCalendarEvent } from '../shared/graph.js';
import { escapeHtml } from '../shared/html.js';
import { getAdminClient } from '../shared/supabase-admin.js';

const json = (statusCode, payload) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  body: JSON.stringify(payload),
});

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const TIME_PATTERN = /^\d{2}:\d{2}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PROPERTY_LABELS = {
  appartement: 'Appartement',
  maison: 'Maison',
  immeuble: 'Immeuble',
};

const formatSlotLabel = (dateStr, timeStr) => {
  const date = brusselsToUtc(dateStr, timeStr);
  return new Intl.DateTimeFormat('fr-BE', {
    timeZone: 'Europe/Brussels',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

const sendEmails = async ({ booking, slotLabel, priceLabel, confirmed, certiflowLine }) => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.warn('SMTP non configuré : aucun email envoyé.');
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
  });

  const propertyLabel = PROPERTY_LABELS[booking.property_type] ?? booking.property_type;
  const safe = {
    name: escapeHtml(booking.name),
    email: escapeHtml(booking.email),
    phone: escapeHtml(booking.phone),
    address: escapeHtml(booking.address),
    message: escapeHtml(booking.message) || '-',
    property: escapeHtml(propertyLabel),
    surface: escapeHtml(booking.surface_range ?? '-'),
    units: booking.units ? String(booking.units) : '-',
    slot: escapeHtml(slotLabel),
    price: escapeHtml(priceLabel),
  };

  const internalHtml = `
    <h2>${confirmed ? 'Nouveau rendez-vous confirmé' : 'Demande de rendez-vous à valider'}</h2>
    <p><strong>Créneau :</strong> ${safe.slot}</p>
    <p><strong>Type :</strong> ${safe.property}${booking.units ? ` (${safe.units} unités)` : ''}</p>
    <p><strong>Surface :</strong> ${safe.surface}</p>
    <p><strong>Adresse :</strong> ${safe.address}</p>
    <p><strong>Prix :</strong> ${safe.price}</p>
    ${certiflowLine ? `<p><strong>Certiflow :</strong> ${escapeHtml(certiflowLine)}</p>` : ''}
    <hr/>
    <p><strong>Nom :</strong> ${safe.name}</p>
    <p><strong>Email :</strong> ${safe.email}</p>
    <p><strong>Téléphone :</strong> ${safe.phone}</p>
    <p><strong>Message :</strong><br/>${safe.message}</p>
  `;

  const clientHtml = `
    <h2>${confirmed ? 'Votre rendez-vous est confirmé' : 'Votre demande a bien été reçue'}</h2>
    <p>Bonjour ${safe.name},</p>
    ${
      confirmed
        ? `<p>Votre visite est fixée au <strong>${safe.slot}</strong>, à l'adresse suivante :<br/>${safe.address}</p>
           <p>Tarif annoncé : <strong>${safe.price}</strong></p>`
        : `<p>Nous avons bien reçu votre demande pour le <strong>${safe.slot}</strong> à l'adresse suivante :<br/>${safe.address}</p>
           <p>Ce type de bien nécessite un devis : nous revenons vers vous sous 12 heures pour confirmer le rendez-vous et le tarif.</p>`
    }
    <h3>Documents à préparer</h3>
    <ul>
      <li>Factures de travaux (isolation, châssis, toiture, chauffage)</li>
      <li>Documentation technique du chauffage et de l'eau chaude sanitaire</li>
      <li>Pour un appartement : accès au local de chaufferie et documents de la copropriété</li>
      <li>Plan du bien, si vous le possédez</li>
    </ul>
    <p>Sans justificatif, le certificateur doit appliquer des valeurs par défaut pénalisantes : chaque document retrouvé peut améliorer votre classe.</p>
    <p>Une question ? Répondez simplement à cet email ou appelez le +32 486 98 74 84.</p>
    <p>KCertiPEB — certificateurs PEB agréés Bruxelles Environnement</p>
  `;

  await transporter.sendMail({
    from: `"K Certipeb" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: booking.email,
    subject: `${confirmed ? 'RDV confirmé' : 'Demande RDV'} — ${propertyLabel} — ${slotLabel}`,
    html: internalHtml,
  });

  await transporter.sendMail({
    from: `"K Certipeb" <${process.env.SMTP_USER}>`,
    to: booking.email,
    replyTo: process.env.SMTP_USER,
    subject: confirmed ? 'Votre rendez-vous PEB est confirmé' : 'Votre demande de rendez-vous PEB',
    html: clientHtml,
  });

  return true;
};

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Méthode non autorisée' });
  }

  let payload;
  try {
    payload = JSON.parse(event.body ?? '{}');
  } catch {
    return json(400, { error: 'Corps de requête illisible' });
  }

  const { propertyType, surfaceRange, units, street, houseNumber, postalCode, date, time, name, email, phone, message } =
    payload;

  if (!isBookableOnline(propertyType)) {
    return json(400, { error: 'Ce type de bien ne se réserve pas en ligne' });
  }
  if (!DATE_PATTERN.test(date ?? '') || !TIME_PATTERN.test(time ?? '')) {
    return json(400, { error: 'Créneau invalide' });
  }
  if (!name?.trim() || !phone?.trim()) {
    return json(400, { error: 'Nom et téléphone sont obligatoires' });
  }

  const streetValue = String(street ?? '').trim();
  const numberValue = String(houseNumber ?? '').trim();
  const postalValue = String(postalCode ?? '').trim();
  if (!streetValue || !numberValue || !postalValue || streetValue.length > 150 || numberValue.length > 20) {
    return json(400, { error: 'Adresse incomplète : rue, numéro et code postal sont obligatoires' });
  }

  const commune = getBrusselsCommune(postalValue);
  if (!commune) {
    return json(400, {
      error: 'Nous effectuons uniquement des certificats PEB en Région de Bruxelles-Capitale.',
    });
  }

  const address = `${streetValue} ${numberValue}, ${postalValue} ${commune}`;
  if (!EMAIL_PATTERN.test(email ?? '')) {
    return json(400, { error: 'Adresse email invalide' });
  }

  const unitCount = units ? Number(units) : null;
  if (unitCount !== null && (!Number.isFinite(unitCount) || unitCount < 1 || unitCount > MAX_UNITS)) {
    return json(400, { error: `Nombre d'unités invalide (1 à ${MAX_UNITS})` });
  }

  const blockMinutes = getBlockMinutes(propertyType, unitCount);
  if (blockMinutes === null) {
    return json(400, { error: 'Durée de visite indéterminable' });
  }

  // Le créneau demandé doit faire partie de ceux que le système aurait proposés :
  // jour ouvrable, dans les horaires, délai de prévenance respecté.
  const config = getBookingConfig();
  const candidates = generateCandidateSlots(date, blockMinutes, config, new Date());
  if (!candidates.some((slot) => slot.time === time)) {
    return json(400, { error: "Ce créneau n'est pas proposé à la réservation" });
  }

  const supabase = getAdminClient();
  if (!supabase) {
    console.error('SUPABASE_SERVICE_ROLE_KEY manquante : réservation impossible.');
    return json(503, { error: 'Service de réservation temporairement indisponible' });
  }

  const startsAt = brusselsToUtc(date, time);
  const endsAt = new Date(startsAt.getTime() + blockMinutes * 60000);
  const status = getBookingStatus(propertyType);
  const priceValue = getPriceValue(propertyType, surfaceRange);

  const row = {
    starts_at: startsAt.toISOString(),
    ends_at: endsAt.toISOString(),
    status,
    property_type: propertyType,
    surface_range: surfaceRange || null,
    units: unitCount,
    address,
    postal_code: postalValue,
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    message: message?.trim() || '',
    price_value: priceValue,
  };

  const { data: inserted, error: insertError } = await supabase.from('bookings').insert([row]).select().single();

  if (insertError) {
    // 23P01 : violation de la contrainte d'exclusion — quelqu'un a pris le créneau entre
    // l'affichage de la page et l'envoi du formulaire.
    if (insertError.code === '23P01') {
      return json(409, { error: 'Ce créneau vient d’être réservé. Merci d’en choisir un autre.' });
    }
    console.error('Insertion de la réservation impossible :', insertError);
    return json(500, { error: "La réservation n'a pas pu être enregistrée" });
  }

  const slotLabel = formatSlotLabel(date, time);
  const priceLabel = priceValue ? `${priceValue} € TVAC` : 'Sur devis';
  const confirmed = status === 'confirmed';

  // À partir d'ici, le créneau est verrouillé : plus rien ne doit faire échouer la requête.
  let eventId = null;
  if (confirmed) {
    try {
      eventId = await createCalendarEvent({
        subject: `Visite PEB — ${PROPERTY_LABELS[propertyType] ?? propertyType} — ${name.trim()}`,
        bodyHtml: `
          <p><strong>${escapeHtml(name)}</strong> — ${escapeHtml(phone)} — ${escapeHtml(email)}</p>
          <p>${escapeHtml(address)}</p>
          <p>Surface : ${escapeHtml(surfaceRange ?? '-')} · Tarif : ${escapeHtml(priceLabel)}</p>
          <p>${escapeHtml(message ?? '')}</p>
        `,
        startUtc: startsAt,
        endUtc: endsAt,
        location: address.trim(),
      });

      if (eventId) {
        await supabase.from('bookings').update({ graph_event_id: eventId }).eq('id', inserted.id);
      }
    } catch (error) {
      // La réservation reste valide et le créneau bloqué ; seul l'agenda n'a pas été mis à
      // jour. L'email interne fait foi pour encoder le rendez-vous manuellement.
      console.error('Création de l’événement Outlook impossible :', error);
    }
  }

  // Dossier dans Certiflow : écrit directement en base, sans événement ni email côté
  // Certiflow. Un échec est signalé dans l'email interne pour encoder le dossier à la main.
  let certiflowLine = null;
  if (isCertiflowConfigured()) {
    try {
      const dossierId = await createCertiflowDossier(inserted, { eventId, confirmed });
      certiflowLine = `dossier ${dossierId} créé`;
    } catch (error) {
      console.error('Création du dossier Certiflow impossible :', error);
      certiflowLine = 'dossier NON créé — à encoder manuellement';
    }
  }

  let emailSent = false;
  try {
    emailSent = await sendEmails({ booking: row, slotLabel, priceLabel, confirmed, certiflowLine });
  } catch (error) {
    console.error('Envoi des emails impossible :', error);
  }

  return json(201, {
    id: inserted.id,
    status,
    confirmed,
    slotLabel,
    priceLabel,
    emailSent,
  });
}
