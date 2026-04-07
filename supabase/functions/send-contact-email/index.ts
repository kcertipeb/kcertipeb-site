import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createTransport } from "https://deno.land/x/nodemailer@6.9.8/mod.ts";

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
  surface_range?: string;
  address: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  // Gestion CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const body: ContactData = await req.json();

    const {
      name,
      email,
      phone,
      property_type,
      surface_range,
      address,
      message,
    } = body;

    const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD");

    if (!SMTP_PASSWORD) {
      console.error("❌ SMTP_PASSWORD is not set");
      return new Response(
        JSON.stringify({ success: false, error: "Email service not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Configuration SMTP Microsoft 365
    const transporter = createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "info@kcertipeb.be",
        pass: SMTP_PASSWORD,
      },
      debug: true,
      logger: true,
    });

    // 🔍 Vérification SMTP (très utile pour debug)
    try {
      await transporter.verify();
      console.log("✅ SMTP connection OK");
    } catch (verifyError) {
      console.error("❌ SMTP verification failed:", verifyError);
      throw new Error("SMTP connection failed");
    }

    // Contenu HTML
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
        <li><strong>Surface:</strong> ${surface_range || "-"}</li>
        <li><strong>Adresse:</strong> ${address}</li>
      </ul>

      ${message ? `<h3>Message</h3><p>${message}</p>` : ""}

      <hr>
      <p><small>Reçu le ${new Date().toLocaleString("fr-BE", {
        timeZone: "Europe/Brussels",
      })}</small></p>
    `;

    // Envoi email
    const info = await transporter.sendMail({
      from: "K Certipeb <info@kcertipeb.be>",
      to: "info@kcertipeb.be",
      replyTo: email,
      subject: `Nouvelle demande PEB - ${property_type} - ${address}`,
      text: htmlContent,
      html: htmlContent,
    });

    console.log("✅ Email envoyé :", info);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error in send-contact-email:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});