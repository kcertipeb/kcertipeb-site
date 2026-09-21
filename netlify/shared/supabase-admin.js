import { createClient } from '@supabase/supabase-js';

/**
 * Client Supabase à privilèges élevés, réservé aux Netlify Functions.
 *
 * La table `bookings` a RLS activé sans aucune policy : le rôle `anon` du navigateur ne
 * peut donc rien y lire ni y écrire. Seule la clé `service_role`, qui contourne RLS,
 * donne accès aux réservations — et elle ne doit jamais être préfixée `VITE_`, sinon Vite
 * l'inclurait dans le bundle public.
 */
export const getAdminClient = () => {
  const url = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
};
