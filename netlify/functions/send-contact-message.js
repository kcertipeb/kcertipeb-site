/**
 * Question libre envoyée depuis `/contact`.
 *
 *   POST /.netlify/functions/send-contact-message
 *   { name, email, message }
 *
 * Enregistre puis notifie en une seule requête. Le formulaire de réservation, lui, passe
 * par `create-booking` : ce sont deux parcours distincts et deux tables distinctes.
 *
 * `contact_submissions` et son Database Webhook ne sont pas touchés : l'historique des
 * anciennes demandes reste intact.
 */

import nodemailer from 'nodemailer';

import { escapeHtml } from '../shared/html.js';
import { getAdminClient } from '../shared/supabase-admin.js';

const json = (statusCode, payload) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  body: JSON.stringify(payload),
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const name = payload.name?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const message = payload.message?.trim() ?? '';

  if (!name || !message) {
    return json(400, { error: 'Nom et message sont obligatoires' });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return json(400, { error: 'Adresse email invalide' });
  }

  const supabase = getAdminClient();
  if (supabase) {
    const { error } = await supabase.from('contact_messages').insert([{ name, email, message }]);
    if (error) {
      console.error('Enregistrement du message impossible :', error);
    }
  }

  // L'email prime sur l'enregistrement : même si la base a échoué, la question doit
  // arriver dans la boîte de réception.
  if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
      });

      await transporter.sendMail({
        from: `"K Certipeb" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        replyTo: email,
        subject: `Question depuis le site — ${name}`,
        html: `
          <h2>Nouvelle question</h2>
          <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
          <p><strong>Email :</strong> ${escapeHtml(email)}</p>
          <p><strong>Message :</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
        `,
      });
    } catch (error) {
      console.error('Envoi du message impossible :', error);
      return json(502, { error: "Le message n'a pas pu être envoyé" });
    }
  }

  return json(201, { success: true });
}
