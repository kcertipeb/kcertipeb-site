/*
  # Système de prise de rendez-vous en ligne

  ## Vue d'ensemble
  Ajoute les deux tables nécessaires au parcours de réservation `/reserver` et au
  formulaire de question simplifié `/contact`.

  Aucune table existante n'est modifiée. `contact_submissions` et son Database Webhook
  d'envoi d'email restent intacts — un rollback se limite à supprimer les deux nouvelles
  tables.

  ## Nouvelles tables

  ### `bookings`
  Un rendez-vous de visite PEB. Le bloc agenda (`starts_at` → `ends_at`) inclut déjà les
  30 minutes de trajet, il représente donc l'occupation réelle du certificateur.

  - `status` : `confirmed` (appartement/maison, réservation ferme)
                `pending`   (immeuble, audit — nécessite un devis et une validation)
                `cancelled` (annulé, libère le créneau)
  - `units` : nombre d'unités, uniquement pour les immeubles
  - `graph_event_id` : identifiant de l'événement créé dans Outlook via Microsoft Graph

  ### `contact_messages`
  Question libre depuis `/contact`. Table distincte volontairement : la policy RLS de
  `contact_submissions` exige `phone`, `property_type` et `address` non nuls, ce qui
  rejetterait un formulaire court.

  ## Sécurité

  `bookings` : RLS activé **sans aucune policy**. Le rôle `anon` ne peut donc ni lire ni
  écrire. Les réservations passent exclusivement par la Netlify Function `create-booking`,
  qui utilise la clé `service_role` (laquelle contourne RLS). Les données client ne sont
  ainsi jamais exposées au navigateur, et les disponibilités renvoyées au front ne
  contiennent que des heures libres.

  `contact_messages` : policy INSERT publique, comme le formulaire existant. Aucune policy
  SELECT.

  ## Anti double-réservation

  La garantie est posée en base, pas dans l'interface : une contrainte d'exclusion GiST
  interdit deux réservations non annulées dont les plages horaires se chevauchent. Une
  violation remonte en SQLSTATE `23P01`, que la fonction traduit en HTTP 409.
*/

-- Requis par la contrainte d'exclusion (opérateurs btree combinés aux opérateurs GiST)
CREATE EXTENSION IF NOT EXISTS btree_gist;

-- ---------------------------------------------------------------------------
-- bookings
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  starts_at timestamptz NOT NULL,
  ends_at timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'confirmed',
  property_type text NOT NULL,
  surface_range text,
  units integer,
  address text NOT NULL,
  postal_code text,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text DEFAULT '',
  price_value integer,
  graph_event_id text,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT bookings_status_check CHECK (status IN ('confirmed', 'pending', 'cancelled')),
  CONSTRAINT bookings_time_order CHECK (ends_at > starts_at),
  CONSTRAINT bookings_units_positive CHECK (units IS NULL OR units > 0)
);

-- Deux rendez-vous actifs ne peuvent pas se chevaucher.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'bookings_no_overlap'
  ) THEN
    ALTER TABLE bookings ADD CONSTRAINT bookings_no_overlap
      EXCLUDE USING gist (tstzrange(starts_at, ends_at) WITH &&)
      WHERE (status <> 'cancelled');
  END IF;
END $$;

-- Recherche des réservations d'une journée donnée
CREATE INDEX IF NOT EXISTS bookings_starts_at_idx ON bookings (starts_at);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- ---------------------------------------------------------------------------
-- contact_messages
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public contact messages" ON contact_messages;

CREATE POLICY "Allow public contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (
    name IS NOT NULL
    AND email IS NOT NULL
    AND message IS NOT NULL
  );
