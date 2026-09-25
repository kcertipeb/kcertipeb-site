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
 *
 * Après l'insertion, l'email au client part en parallèle de l'événement Outlook et du
 * dossier Certiflow ; seul l'email interne les attend. Les emails passent par Microsoft
 * Graph (SMTP en secours) : c'est ce qui garde la confirmation rapide pour le client.
 */

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import nodemailer from 'nodemailer';

import {
  getBlockMinutes,
  getBookingStatus,
  getBrusselsCommune,
  AUDIT_PROPERTY_TYPES,
  getPriceValue,
  getSurfaceRange,
  isBookableOnline,
  MAX_PRICED_UNITS,
  MAX_UNITS,
  TRAVEL_BUFFER_MINUTES,
} from '../shared/booking-rules.js';
import { buildBookingEmails } from '../shared/booking-emails.js';
import { createCertiflowDossier, isCertiflowConfigured } from '../shared/certiflow.js';
import { brusselsToUtc, generateCandidateSlots, getBookingConfig } from '../shared/datetime.js';
import { createCalendarEvent, isGraphConfigured, sendGraphMail, warmUpGraph } from '../shared/graph.js';
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

/**
 * Guide joint à l'email du client. Le PDF est un fichier public du site : la fonction le
 * récupère par HTTP et le garde en mémoire pour les réservations suivantes, ce qui évite
 * de l'embarquer dans le paquet de la fonction.
 */
const GUIDE_PATH = '/visite-du-certificateur.pdf';
const GUIDE_FILENAME = 'Visite du certificateur — KCertiPEB.pdf';
let cachedGuide = null;

/**
 * Le PDF est lu sur le disque (il est embarqué avec la fonction par `included_files` du
 * `netlify.toml`) et, à défaut, téléchargé depuis le site. Il est gardé en mémoire pour
 * les réservations suivantes traitées par la même instance.
 */
const getGuideAttachment = async (origin) => {
  if (cachedGuide !== null) {
    return cachedGuide;
  }

  const toAttachment = (content) => ({ filename: GUIDE_FILENAME, contentType: 'application/pdf', content });

  for (const candidate of ['public/visite-du-certificateur.pdf', 'visite-du-certificateur.pdf']) {
    try {
      cachedGuide = toAttachment(await readFile(resolve(process.cwd(), candidate)));
      return cachedGuide;
    } catch {
      // Fichier absent à cet emplacement : on essaie le suivant.
    }
  }

  try {
    const response = await fetch(`${origin}${GUIDE_PATH}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    cachedGuide = toAttachment(Buffer.from(await response.arrayBuffer()));
  } catch (error) {
    // Sans le guide, l'email part quand même : mieux vaut un email incomplet qu'aucun.
    console.error('Guide client introuvable, email envoyé sans pièce jointe :', error);
    cachedGuide = undefined;
  }

  return cachedGuide;
};

/**
 * Contenu de l'événement Outlook : coordonnées du bien et du client, avec des boutons
 * pour appeler, écrire ou ouvrir l'itinéraire directement depuis l'agenda, y compris
 * depuis le téléphone.
 */
const buildEventBody = ({
  name,
  phone,
  email,
  address,
  surfaceRange,
  priceLabel,
  message,
  priceToConfirm,
  hasPrice,
  units,
}) => {
  const dialable = String(phone ?? '').replace(/[^\d+]/g, '');
  const button = (href, label) =>
    `<a href="${href}" style="display:inline-block;margin:0 8px 8px 0;padding:10px 18px;border-radius:8px;background:#047857;color:#ffffff;font-family:Segoe UI,Arial,sans-serif;font-size:14px;font-weight:600;text-decoration:none;">${label}</a>`;

  return `
    <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#111827;">
      ${
        priceToConfirm
          ? `<p style="color:#b45309;"><strong>${
              hasPrice
                ? 'Tarif estimé : à confirmer avec le client sous 12 h.'
                : 'Plus de 6 unités : devis sur mesure à envoyer sous 12 h.'
            }</strong></p>`
          : ''
      }
      <p style="margin:0 0 10px;">
        ${button(`tel:${dialable}`, `📞 Appeler ${escapeHtml(name)}`)}
        ${button(`https://wa.me/${dialable.replace('+', '')}`, '💬 WhatsApp')}
        ${button(`mailto:${escapeHtml(email)}`, '✉️ Email')}
        ${button(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '🗺️ Itinéraire')}
      </p>
      <p style="margin:0 0 4px;"><strong>${escapeHtml(name)}</strong> — ${escapeHtml(phone)} — ${escapeHtml(email)}</p>
      <p style="margin:0 0 4px;">${escapeHtml(address)}</p>
      <p style="margin:0 0 4px;">Surface : ${escapeHtml(surfaceRange || '—')}${
        units ? ` · ${units} unités` : ''
      } · Tarif : ${escapeHtml(priceLabel)}</p>
      ${message ? `<p style="margin:10px 0 0;"><strong>Message du client :</strong><br/>${escapeHtml(message)}</p>` : ''}
    </div>`;
};

const PROPERTY_LABELS = {
  appartement: 'Appartement',
  maison: 'Maison',
  immeuble: 'Immeuble',
  audit: 'Audit énergétique',
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

/** Boîte d'où partent les emails et qui reçoit l'email interne. */
const getMailbox = () => process.env.SMTP_USER || process.env.MS_CALENDAR_USER;

const isSmtpConfigured = () => Boolean(process.env.SMTP_USER && process.env.SMTP_PASSWORD);

/**
 * Envoie un email : par Microsoft Graph (une requête HTTPS), sinon par SMTP.
 * SMTP reste le secours si Graph échoue — permission `Mail.Send` absente, panne, etc.
 */
const deliverEmail = async ({ to, replyTo, subject, html, attachments = [] }) => {
  if (isGraphConfigured()) {
    try {
      await sendGraphMail({ to, replyTo, subject, html, attachments });
      return;
    } catch (error) {
      if (!isSmtpConfigured()) {
        throw error;
      }
      console.error('Envoi par Graph impossible, repli sur SMTP :', error);
    }
  }

  if (!isSmtpConfigured()) {
    throw new Error('Aucun moyen d’envoi configuré (Graph ou SMTP)');
  }

  await nodemailer
    .createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    })
    .sendMail({
      from: `"K Certipeb" <${process.env.SMTP_USER}>`,
      to,
      replyTo,
      subject,
      html,
      attachments: attachments.map((file) => ({
        filename: file.filename,
        content: file.content,
        contentType: file.contentType,
      })),
    });
};


export async function handler(event) {
  const startedAt = Date.now();

  // Mode « réveil » : appelé par la page dès que le client arrive à l'étape Coordonnées.
  // Une fonction Netlify inutilisée depuis quelques minutes est mise en veille ; la démarrer
  // et obtenir le jeton Microsoft pendant que le client tape son nom évite plusieurs
  // secondes d'attente au moment où il clique sur « Confirmer ». Ne réserve rien.
  if (event.httpMethod === 'GET' && event.queryStringParameters?.warm) {
    await warmUpGraph().catch((error) => console.error('Réveil Graph impossible :', error));
    return json(200, { ready: true });
  }

  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Méthode non autorisée' });
  }

  let payload;
  try {
    payload = JSON.parse(event.body ?? '{}');
  } catch {
    return json(400, { error: 'Corps de requête illisible' });
  }

  const {
    propertyType,
    surfaceRange,
    units,
    unitSurfaces,
    auditPropertyType,
    street,
    houseNumber,
    postalCode,
    date,
    time,
    name,
    email,
    phone,
    message,
  } = payload;

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

  // Immeuble : surfaces déclarées unité par unité, la première étant obligatoire. Elles ne
  // servent qu'au calcul du tarif, toujours refait ici.
  const surfaces = (Array.isArray(unitSurfaces) ? unitSurfaces : [])
    .map(Number)
    .filter((value) => Number.isFinite(value) && value > 0 && value <= 2000);

  // Au-delà de 6 unités, le tarif est établi sur devis : les surfaces ne sont plus demandées.
  if (propertyType === 'immeuble' && surfaces.length === 0 && unitCount !== null && unitCount <= MAX_PRICED_UNITS) {
    return json(400, { error: "Indiquez au moins la surface de la première unité" });
  }

  // Audit : il porte sur un appartement ou une maison ; l'audit d'immeuble passe par un devis.
  if (propertyType === 'audit' && !AUDIT_PROPERTY_TYPES.includes(auditPropertyType)) {
    return json(400, { error: 'Précisez si l’audit porte sur un appartement ou une maison' });
  }

  const blockMinutes = getBlockMinutes(propertyType, unitCount, auditPropertyType);
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
  const priceValue = getPriceValue(propertyType, surfaceRange, {
    units: unitCount,
    unitSurfaces: surfaces,
    auditPropertyType,
  });

  // Pour un immeuble, la tranche retenue est celle de l'unité la plus grande : c'est elle
  // qui sert de base au tarif. Le détail des surfaces est conservé dans le message.
  const storedSurfaceRange =
    propertyType === 'immeuble'
      ? surfaces.length > 0
        ? getSurfaceRange(Math.max(...surfaces))
        : null
      : surfaceRange || null;
  const surfacesNote =
    propertyType === 'immeuble' && surfaces.length > 0
      ? `Surfaces déclarées : ${surfaces.join(', ')} m² (${surfaces.length}/${unitCount} unités)`
      : '';
  const auditNote =
    propertyType === 'audit' ? `Audit énergétique d'${auditPropertyType === 'maison' ? 'une maison' : 'un appartement'}` : '';
  const clientMessage = [message?.trim(), auditNote, surfacesNote].filter(Boolean).join('\n');

  const row = {
    starts_at: startsAt.toISOString(),
    ends_at: endsAt.toISOString(),
    status,
    property_type: propertyType,
    surface_range: storedSurfaceRange,
    units: unitCount,
    address,
    postal_code: postalValue,
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    message: clientMessage,
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
  // Durée de chaque étape, écrite dans les journaux Netlify pour repérer une lenteur.
  const timings = { enregistrement: Date.now() - startedAt };
  const timed = async (label, task) => {
    const stepStart = Date.now();
    try {
      return await task();
    } finally {
      timings[label] = Date.now() - stepStart;
    }
  };

  const visitMinutes = blockMinutes - TRAVEL_BUFFER_MINUTES;
  const booking = { ...inserted, ...row };
  const origin = process.env.URL ?? `https://${event.headers?.host ?? 'kcertipeb.be'}`;

  // L'email au client ne dépend ni d'Outlook ni de Certiflow : il part tout de suite, en
  // parallèle des étapes suivantes, au lieu d'attendre la fin de chacune.
  const clientEmailSent = timed('emailClient', async () => {
    const guide = await getGuideAttachment(origin);
    const { client } = buildBookingEmails({
      booking,
      slotLabel,
      priceLabel,
      confirmed,
      visitMinutes,
      priceToConfirm: propertyType === 'immeuble',
      attachments: guide ? [guide] : [],
    });
    await deliverEmail({ ...client, replyTo: getMailbox() });
  }).then(
    () => true,
    (error) => {
      console.error('Envoi de l’email au client impossible :', error);
      return false;
    }
  );

  // L'événement est créé dans les deux cas. Une demande sur devis apparaît comme
  // « À CONFIRMER » et en disponibilité provisoire, pour la distinguer d'un rendez-vous
  // ferme tout en gardant le créneau visible dans l'agenda.
  let eventId = null;
  try {
    eventId = await timed('outlook', () =>
      createCalendarEvent({
        subject: `Visite PEB — ${PROPERTY_LABELS[propertyType] ?? propertyType} — ${name.trim()}${
          propertyType === 'immeuble' ? ' (tarif à confirmer)' : ''
        }`,
        bodyHtml: buildEventBody({
          name,
          phone,
          email,
          address,
          surfaceRange,
          priceLabel,
          message: clientMessage,
          priceToConfirm: propertyType === 'immeuble',
          hasPrice: Boolean(priceValue),
          units: unitCount,
        }),
        startUtc: startsAt,
        endUtc: endsAt,
        location: address,
        locationAddress: { street: `${streetValue} ${numberValue}`, postalCode: postalValue, city: commune },
        showAs: confirmed ? 'busy' : 'tentative',
      })
    );

    if (eventId) {
      await supabase.from('bookings').update({ graph_event_id: eventId }).eq('id', inserted.id);
    }
  } catch (error) {
    // La réservation reste valide et le créneau bloqué ; seul l'agenda n'a pas été mis à
    // jour. L'email interne fait foi pour encoder le rendez-vous manuellement.
    console.error('Création de l’événement Outlook impossible :', error);
  }

  // Dossier dans Certiflow : écrit directement en base, sans événement ni email côté
  // Certiflow. Un échec est signalé dans l'email interne pour encoder le dossier à la main.
  let certiflowDossier = null;
  if (isCertiflowConfigured()) {
    try {
      certiflowDossier = await timed('certiflow', () => createCertiflowDossier(inserted, { eventId, confirmed }));
    } catch (error) {
      console.error('Création du dossier Certiflow impossible :', error);
    }
  }

  // L'email interne part en dernier : il récapitule ce qui a réussi ou échoué.
  const clientEmailResult = await clientEmailSent;
  const internalEmailSent = await timed('emailInterne', () => {
    const { internal } = buildBookingEmails({
      booking,
      slotLabel,
      priceLabel,
      confirmed,
      visitMinutes,
      priceToConfirm: propertyType === 'immeuble',
      sync: {
        outlook: Boolean(eventId),
        certiflow: certiflowDossier,
        clientEmail: clientEmailResult,
      },
    });
    return deliverEmail({ ...internal, to: getMailbox() });
  }).then(
    () => true,
    (error) => {
      console.error('Envoi de l’email interne impossible :', error);
      return false;
    }
  );
  const emailSent = clientEmailResult && internalEmailSent;

  console.log(`Réservation ${inserted.id} — durées (ms) :`, JSON.stringify({ ...timings, total: Date.now() - startedAt }));

  return json(201, {
    id: inserted.id,
    status,
    confirmed,
    slotLabel,
    priceLabel,
    emailSent,
  });
}
