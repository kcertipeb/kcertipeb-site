/**
 * Emails d'une réservation : celui du client et celui du certificateur.
 *
 * Mise en page en tableaux HTML avec styles en ligne : c'est la seule façon d'obtenir un
 * rendu correct dans Outlook, qui ignore les feuilles de style et la mise en page moderne.
 * Largeur fixée à 600 px, la valeur qui passe partout, y compris sur mobile.
 */

import { escapeHtml } from './html.js';

const SITE_URL = 'https://kcertipeb.be';
const LOGO_URL = `${SITE_URL}/apple-touch-icon.png`;
const PHONE_DISPLAY = '+32 486 98 74 84';
const PHONE_LINK = '+32486987484';
const ACCREDITATION = '001859432';
const VAT_NUMBER = 'BE 0800.521.796';

const GREEN = '#047857';
const GREEN_LIGHT = '#ecfdf5';
const BORDER = '#e5e7eb';
const TEXT = '#111827';
const MUTED = '#6b7280';

const PROPERTY_LABELS = {
  appartement: 'Appartement',
  maison: 'Maison',
  immeuble: 'Immeuble',
  audit: 'Audit énergétique',
};

/** Ligne « intitulé / valeur » du récapitulatif. */
const row = (label, value) => `
  <tr>
    <td style="padding:10px 0;border-bottom:1px solid ${BORDER};color:${MUTED};font-size:14px;vertical-align:top;width:40%;">${label}</td>
    <td style="padding:10px 0;border-bottom:1px solid ${BORDER};color:${TEXT};font-size:14px;font-weight:600;vertical-align:top;">${value}</td>
  </tr>`;

const button = (href, label, { outlined = false } = {}) => `
  <a href="${href}" style="display:inline-block;margin:4px 8px 4px 0;padding:11px 20px;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;${
    outlined ? `border:2px solid ${GREEN};color:${GREEN};background:#ffffff;` : `background:${GREEN};color:#ffffff;`
  }">${label}</a>`;

/** Enveloppe commune : en-tête coloré, contenu, pied de page légal. */
const layout = ({ title, subtitle, content }) => `
<!DOCTYPE html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background:#f3f4f6;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;font-family:Segoe UI,Helvetica,Arial,sans-serif;">
        <tr>
          <td style="background:${GREEN};padding:24px 28px;">
            <table role="presentation" cellpadding="0" cellspacing="0"><tr>
              <td style="padding-right:12px;"><img src="${LOGO_URL}" width="40" height="40" alt="KCertiPEB" style="display:block;border-radius:8px;"></td>
              <td>
                <div style="color:#ffffff;font-size:20px;font-weight:700;line-height:1.3;">${escapeHtml(title)}</div>
                <div style="color:#d1fae5;font-size:14px;margin-top:2px;">${escapeHtml(subtitle)}</div>
              </td>
            </tr></table>
          </td>
        </tr>
        <tr><td style="padding:28px;color:${TEXT};font-size:15px;line-height:1.6;">${content}</td></tr>
        <tr>
          <td style="padding:18px 28px;background:#f9fafb;border-top:1px solid ${BORDER};color:${MUTED};font-size:12px;line-height:1.6;">
            <strong style="color:${TEXT};">KCertiPEB</strong> — certificateur PEB agréé Bruxelles Environnement<br>
            N° d'agrément ${ACCREDITATION} · TVA ${VAT_NUMBER}<br>
            <a href="tel:${PHONE_LINK}" style="color:${GREEN};text-decoration:none;">${PHONE_DISPLAY}</a> ·
            <a href="mailto:info@kcertipeb.be" style="color:${GREEN};text-decoration:none;">info@kcertipeb.be</a> ·
            <a href="${SITE_URL}" style="color:${GREEN};text-decoration:none;">kcertipeb.be</a>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

/** Encadré coloré, pour une consigne ou un avertissement. */
const callout = (html, { color = GREEN, background = GREEN_LIGHT } = {}) => `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:18px 0;">
    <tr><td style="border-left:4px solid ${color};background:${background};padding:14px 16px;border-radius:0 8px 8px 0;font-size:14px;line-height:1.6;">${html}</td></tr>
  </table>`;

const formatBrussels = (date, options) =>
  new Intl.DateTimeFormat('fr-BE', { timeZone: 'Europe/Brussels', ...options }).format(new Date(date));

const timeOnly = (date) => formatBrussels(date, { hour: '2-digit', minute: '2-digit' });

/**
 * Fichier .ics joint à l'email du client : un clic l'ajoute à son agenda, avec un rappel
 * la veille. Les dates sont en UTC (suffixe Z), la seule forme comprise partout.
 */
export const buildIcsFile = ({ uid, startsAt, endsAt, summary, description, location }) => {
  const stamp = (value) => new Date(value).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const escapeIcs = (value) => String(value ?? '').replace(/([,;\\])/g, '\\$1').replace(/\r?\n/g, '\\n');

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//KCertiPEB//Reservation//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}@kcertipeb.be`,
    `DTSTAMP:${stamp(Date.now())}`,
    `DTSTART:${stamp(startsAt)}`,
    `DTEND:${stamp(endsAt)}`,
    `SUMMARY:${escapeIcs(summary)}`,
    `DESCRIPTION:${escapeIcs(description)}`,
    `LOCATION:${escapeIcs(location)}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    `DESCRIPTION:${escapeIcs(summary)}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return {
    filename: 'rendez-vous-peb.ics',
    contentType: 'text/calendar; charset=utf-8; method=PUBLISH',
    content: Buffer.from(`${lines.join('\r\n')}\r\n`, 'utf8'),
  };
};

/**
 * Emails de la réservation.
 *
 * @param booking        ligne insérée dans `bookings`
 * @param slotLabel      créneau en toutes lettres
 * @param priceLabel     tarif affiché
 * @param confirmed      rendez-vous ferme (appartement, maison) ou demande de devis
 * @param visitMinutes   durée de la visite seule
 * @param sync           { outlook, certiflow } pour l'email interne
 * @param attachments    pièces jointes supplémentaires de l'email client
 */
export const buildBookingEmails = ({
  booking,
  slotLabel,
  priceLabel,
  confirmed,
  visitMinutes,
  priceToConfirm = false,
  sync = {},
  attachments = [],
}) => {
  const propertyLabel = PROPERTY_LABELS[booking.property_type] ?? booking.property_type;
  const safe = {
    name: escapeHtml(booking.name),
    email: escapeHtml(booking.email),
    phone: escapeHtml(booking.phone),
    address: escapeHtml(booking.address),
    message: escapeHtml(booking.message),
    property: escapeHtml(propertyLabel),
    surface: escapeHtml(booking.surface_range ?? '—'),
    slot: escapeHtml(slotLabel),
    price: escapeHtml(priceLabel),
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(booking.address)}`;
  const blockLabel = `${timeOnly(booking.starts_at)} – ${timeOnly(booking.ends_at)}`;

  // ─── Email du client ────────────────────────────────────────────────────────
  const clientRecap = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BORDER};border-radius:10px;padding:4px 16px;margin:6px 0 18px;">
      ${row('Date et heure', safe.slot)}
      ${row('Adresse du bien', safe.address)}
      ${row(
        'Type de bien',
        `${safe.property}${booking.units ? ` · ${booking.units} unités` : ''}${
          booking.surface_range ? ` · ${safe.surface}${booking.units ? ' (unité la plus grande)' : ''}` : ''
        }`
      )}
      ${row('Durée sur place', `environ ${visitMinutes} minutes`)}
      ${row('Tarif', priceToConfirm ? `${safe.price} <span style="font-weight:400;color:${MUTED};">(estimation)</span>` : safe.price)}
    </table>
    ${
      priceToConfirm
        ? callout(
            booking.price_value
              ? `<strong>Tarif à confirmer.</strong> Le montant ci-dessus est calculé sur les surfaces que vous avez indiquées. Je vérifie le dossier et vous confirme le tarif définitif <strong>sous 12 heures</strong>. Votre créneau, lui, est déjà réservé.`
              : `<strong>Devis sur mesure.</strong> À partir de 7 unités, j'établis un tarif adapté à votre immeuble et vous l'envoie <strong>sous 12 heures</strong>. Votre créneau, lui, est déjà réservé.`
          )
        : ''
    }`;

  const clientContent = `
    <p style="margin:0 0 14px;">Bonjour Madame, Monsieur,</p>
    ${
      confirmed
        ? `<p style="margin:0 0 14px;">Votre visite est <strong>confirmée</strong>. Voici le récapitulatif :</p>`
        : `<p style="margin:0 0 14px;">Nous avons bien reçu votre demande. Le créneau ci-dessous est <strong>réservé à titre provisoire</strong> : nous revenons vers vous sous 12 heures avec le tarif et la confirmation définitive.</p>`
    }
    ${clientRecap}
    ${
      confirmed
        ? `<p style="margin:0 0 4px;">${button(mapsUrl, 'Voir l’adresse sur la carte', { outlined: true })}</p>
           <p style="margin:0 0 18px;color:${MUTED};font-size:13px;">Le fichier joint <strong>rendez-vous-peb.ics</strong> ajoute la visite à votre agenda, avec un rappel la veille.</p>`
        : ''
    }

    <h3 style="margin:24px 0 8px;font-size:16px;color:${TEXT};">Préparer la visite</h3>
    <p style="margin:0 0 12px;">Le document joint, <strong>« Visite du certificateur »</strong>, détaille le déroulement de la visite et la liste complète des documents à fournir. Comptez environ <strong>${visitMinutes} minutes</strong> sur place, en présence d'une personne majeure.</p>
    <p style="margin:0 0 8px;">L'essentiel à rassembler :</p>
    <ul style="margin:0;padding-left:20px;color:${TEXT};">
      <li style="margin-bottom:6px;">Attestation de contrôle périodique de la chaudière et attestation de réception du chauffage.</li>
      <li style="margin-bottom:6px;">Factures d'entrepreneur pour l'isolation ou le remplacement des châssis.</li>
      <li style="margin-bottom:6px;">Factures d'achat de matériel : isolation, châssis, chaudière…</li>
      <li style="margin-bottom:6px;">Attestation de conformité des panneaux solaires.</li>
      <li style="margin-bottom:6px;">Plans du bien.</li>
      <li style="margin-bottom:6px;">Votre ancien certificat PEB, s'il en existe un.</li>
    </ul>
    ${callout(
      `<strong>Chauffage collectif : prévenez votre syndic.</strong> Si l'immeuble est géré par un syndic et dispose d'un chauffage collectif, je dois pouvoir entrer dans la salle de chaufferie. Elle est souvent fermée à clé : contactez le syndic à l'avance pour organiser l'accès.`,
      { color: '#f59e0b', background: '#fffbeb' }
    )}
    <p style="margin:0 0 14px;">Ces documents et l'accès à la chaufferie <strong>augmentent vos chances d'obtenir un meilleur certificat PEB</strong> : sans justificatif, la réglementation m'impose des valeurs par défaut pénalisantes.</p>
    <p style="margin:0 0 6px;">Vous pouvez me les envoyer dès maintenant, par email ou par WhatsApp :</p>
    <p style="margin:0 0 6px;">
      ${button('mailto:info@kcertipeb.be', 'Envoyer par email', { outlined: true })}
      ${button(`https://wa.me/${PHONE_LINK.replace('+', '')}`, 'Envoyer par WhatsApp', { outlined: true })}
    </p>

    <h3 style="margin:24px 0 8px;font-size:16px;color:${TEXT};">Modifier ou annuler</h3>
    <p style="margin:0 0 10px;">Un empêchement ? Prévenez-nous <strong>au moins 24 heures à l'avance</strong> : appelez-nous ou répondez simplement à cet email.</p>
    <p style="margin:0 0 6px;">
      ${button(`tel:${PHONE_LINK}`, `Appeler le ${PHONE_DISPLAY}`)}
      ${button('mailto:info@kcertipeb.be', 'Écrire par email', { outlined: true })}
    </p>`;

  // ─── Email interne ──────────────────────────────────────────────────────────
  const statusLine = (label, ok, detail) =>
    `<div style="margin-bottom:4px;">${ok ? '✅' : '⚠️'} ${escapeHtml(label)}${detail ? ` — ${escapeHtml(detail)}` : ''}</div>`;

  const internalContent = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BORDER};border-radius:10px;padding:4px 16px;margin:0 0 18px;">
      ${row('Créneau', safe.slot)}
      ${row('Bloc agenda', `${blockLabel} (visite ${visitMinutes} min + 30 min de trajet)`)}
      ${row('Bien', `${safe.property}${booking.units ? ` · ${booking.units} unités` : ''}${booking.surface_range ? ` · ${safe.surface}` : ''}`)}
      ${row('Adresse', safe.address)}
      ${row('Tarif', safe.price)}
      ${row('Client', `${safe.name}<br><span style="font-weight:400;color:${MUTED};">${safe.phone} · ${safe.email}</span>`)}
      ${booking.message ? row('Message', safe.message.replace(/\n/g, '<br>')) : ''}
    </table>

    <p style="margin:0 0 18px;">
      ${button(`tel:${escapeHtml(String(booking.phone ?? '').replace(/[^\d+]/g, ''))}`, 'Appeler le client')}
      ${button(`mailto:${safe.email}`, 'Écrire au client', { outlined: true })}
      ${button(mapsUrl, 'Itinéraire', { outlined: true })}
    </p>

    ${callout(
      `<strong>Synchronisation</strong><div style="margin-top:8px;">
        ${statusLine('Agenda Outlook', sync.outlook === true, sync.outlook === true ? 'événement créé' : 'à encoder à la main')}
        ${statusLine('Dossier Certiflow', Boolean(sync.certiflow), sync.certiflow ? `dossier ${sync.certiflow}` : 'non créé — à encoder à la main')}
        ${statusLine('Email au client', sync.clientEmail === true, sync.clientEmail === true ? 'envoyé' : 'NON envoyé — à recontacter')}
      </div>`,
      sync.outlook === true && sync.certiflow && sync.clientEmail === true
        ? { color: GREEN, background: GREEN_LIGHT }
        : { color: '#dc2626', background: '#fef2f2' }
    )}`;

  // Invitation d'agenda et guide de visite : joints à toutes les réservations.
  const clientAttachments = [
    buildIcsFile({
      uid: booking.id ?? `${booking.starts_at}`,
      startsAt: booking.starts_at,
      endsAt: booking.ends_at,
      summary: `Visite PEB — ${propertyLabel}`,
      description: `Visite pour le certificat PEB de votre ${propertyLabel.toLowerCase()}. KCertiPEB — ${PHONE_DISPLAY}`,
      location: booking.address,
    }),
    ...attachments,
  ];

  return {
    client: {
      to: booking.email,
      subject: confirmed
        ? `Rendez-vous PEB confirmé — ${slotLabel}`
        : `Votre demande de rendez-vous PEB — ${slotLabel}`,
      html: layout({
        title: confirmed ? 'Votre rendez-vous est confirmé' : 'Votre demande est bien reçue',
        subtitle: slotLabel,
        content: clientContent,
      }),
      attachments: clientAttachments,
    },
    internal: {
      replyTo: booking.email,
      subject: `${confirmed ? 'RDV confirmé' : 'Demande RDV'} — ${propertyLabel} — ${slotLabel} — ${booking.postal_code ?? ''}`.trim(),
      html: layout({
        title: confirmed ? 'Nouveau rendez-vous confirmé' : 'Demande de rendez-vous à valider',
        subtitle: `${propertyLabel} · ${slotLabel}`,
        content: internalContent,
      }),
      attachments: [],
    },
  };
};
