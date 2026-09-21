/**
 * Échappement pour les emails HTML.
 *
 * Les valeurs insérées viennent d'un formulaire public : sans échappement, un nom
 * contenant des balises serait interprété dans la boîte de réception du destinataire.
 */
export const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
