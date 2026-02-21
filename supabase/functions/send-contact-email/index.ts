
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactData {
  name: string;
  email: string;
  phone: string;
  property_type: string;
  address: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, phone, property_type, address, message }: ContactData = await req.json();

    const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD");

    if (!SMTP_PASSWORD) {
      console.error("SMTP_PASSWORD is not set");
      return new Response(
        JSON.stringify({ success: false, error: "Email service not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.office365.com",
        port: 587,
        tls: true,
        auth: {
          username: "info@kcertipeb.be",
          password: SMTP_PASSWORD,
        },
      },
    });

    const htmlContent = `
      <h2>Nouvelle Demande de Certificat PEB</h2>

      <h3>Informations Client</h3>
      <ul>
        <li><strong>Nom:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Téléphone:</strong> ${phone}</li>
      </ul>

      <h3>Informations Bien</h3>
      <ul>
        <li><strong>Type:</strong> ${property_type}</li>
        <li><strong>Adresse:</strong> ${address}</li>
      </ul>

      ${message ? `<h3>Message</h3><p>${message}</p>` : ''}

      <hr>
      <p><small>Reçu le ${new Date().toLocaleString('fr-BE', { timeZone: 'Europe/Brussels' })}</small></p>
    `;

    await client.send({
      from: "K Certipeb <info@kcertipeb.be>",
      to: "info@kcertipeb.be",
      replyTo: email,
      subject: `Nouvelle demande PEB - ${property_type} - ${address}`,
      content: htmlContent,
      html: htmlContent,
    });

    await client.close();

    console.log("Email sent successfully via Microsoft 365 SMTP");

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
