import { createClient } from '@supabase/supabase-js';

/**
 * Création d'un dossier dans Certiflow PEB, l'application de gestion des certificats.
 *
 * Certiflow a sa propre base Supabase : ses dossiers vivent dans `certificates`, protégée
 * par RLS (chaque ligne appartient à un `user_id`). On y écrit avec une clé secrète, au nom
 * du compte Certiflow de KCertiPEB. Variables d'environnement attendues :
 *
 *   CERTIFLOW_SUPABASE_URL   URL du projet Supabase de Certiflow
 *   CERTIFLOW_SECRET_KEY     clé secrète de ce projet (jamais préfixée VITE_)
 *   CERTIFLOW_USER_ID        UUID du compte utilisé dans Certiflow
 *
 * Le dossier est écrit directement en base : il ne passe jamais par l'écran « Nouveau
 * certificat » de Certiflow, qui créerait un second événement Outlook et enverrait des
 * emails. L'événement et les emails restent du ressort du site ; le dossier reçoit
 * l'identifiant de l'événement déjà créé, pour que Certiflow le considère synchronisé.
 *
 * Numérotation propre au site, `WEB-2026-0001` : Certiflow ne calcule ses numéros que sur
 * le préfixe `PEB-`, les deux séries ne peuvent donc pas se chevaucher.
 */

const MAX_ATTEMPTS = 3;

export const isCertiflowConfigured = () =>
  Boolean(process.env.CERTIFLOW_SUPABASE_URL && process.env.CERTIFLOW_SECRET_KEY && process.env.CERTIFLOW_USER_ID);

const getClient = () =>
  createClient(process.env.CERTIFLOW_SUPABASE_URL, process.env.CERTIFLOW_SECRET_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

const nextDossierNumber = async (client, userId, prefix) => {
  const { data, error } = await client
    .from('certificates')
    .select('id')
    .eq('user_id', userId)
    .like('id', `${prefix}%`);

  if (error) {
    throw error;
  }

  const max = (data ?? []).reduce((highest, row) => {
    const number = Number.parseInt(row.id.slice(prefix.length), 10);
    return Number.isFinite(number) && number > highest ? number : highest;
  }, 0);

  return max + 1;
};

/**
 * Surface chiffrée à partir de la tranche choisie sur le site, avec la règle de Certiflow
 * (`parseSurface` de devis.jsx) : le dernier nombre — « 50 - 75 m² » → 75, « < 50 m² » → 50.
 * La tranche exacte reste dans les notes.
 */
const surfaceFromRange = (range) => {
  const numbers = String(range ?? '').match(/\d+/g);
  return numbers ? Number(numbers[numbers.length - 1]) : 0;
};

/** Texte des notes du dossier : origine, surface déclarée, message du client. */
const buildNotes = (booking, confirmed) =>
  [
    'Réservé via kcertipeb.be',
    booking.surface_range ? `Surface déclarée : ${booking.surface_range}` : null,
    confirmed ? null : 'Sur devis : créneau proposé par le client, à confirmer avec le tarif.',
    booking.message ? `Message du client : ${booking.message}` : null,
  ]
    .filter(Boolean)
    .join('\n');

/**
 * Crée le dossier Certiflow d'une réservation et renvoie son numéro, ou `null` si
 * l'intégration n'est pas configurée.
 *
 * @param booking ligne de la table `bookings` du site
 */
export const createCertiflowDossier = async (booking, { eventId = null, confirmed }) => {
  if (!isCertiflowConfigured()) {
    return null;
  }

  const client = getClient();
  const userId = process.env.CERTIFLOW_USER_ID;
  const prefix = `WEB-${new Date(booking.starts_at).getUTCFullYear()}-`;

  const row = {
    user_id: userId,
    client: booking.name,
    client_email: booking.email || null,
    client_phone: booking.phone || null,
    address: booking.address,
    type: booking.property_type,
    status: confirmed ? 'planifie' : 'devis',
    visit_date: booking.starts_at,
    price: booking.price_value ?? 0,
    surface: surfaceFromRange(booking.surface_range),
    paid: false,
    archived: false,
    offert: false,
    nb_appartements: booking.property_type === 'immeuble' ? booking.units ?? null : null,
    outlook_event_id: eventId,
    notes: buildNotes(booking, confirmed),
    created_at: new Date().toISOString(),
  };

  let number = await nextDossierNumber(client, userId, prefix);

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    const id = `${prefix}${String(number).padStart(4, '0')}`;
    const { error } = await client.from('certificates').insert([{ ...row, id }]);

    if (!error) {
      return id;
    }

    // 23505 : numéro déjà pris par une réservation simultanée — on passe au suivant.
    if (error.code !== '23505' || attempt === MAX_ATTEMPTS) {
      throw error;
    }
    number += 1;
  }

  return null;
};
