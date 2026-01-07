import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { Resend } from "resend";

interface ContactData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  address: string;
  message: string;
}

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, email, phone, propertyType, address, message }: ContactData =
      JSON.parse(event.body || "{}");

    if (!name || !email || !phone || !propertyType || !address) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Email service not configured" }),
      };
    }

    const resend = new Resend(RESEND_API_KEY);

    const propertyTypeLabel =
      propertyType === "appartement"
        ? "Appartement"
        : propertyType === "maison"
        ? "Maison"
        : "Audit Énergétique";

    const { data, error } = await resend.emails.send({
      from: "K Certipeb <info@kcertipeb.be>",
      to: ["info@kcertipeb.be"],
      reply_to: email,
      subject: `Nouvelle demande PEB - ${propertyTypeLabel}`,
      html: `
        <h2>Nouvelle Demande de Certificat PEB</h2>

        <h3>Informations Client</h3>
        <ul>
          <li><strong>Nom:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Téléphone:</strong> ${phone}</li>
        </ul>

        <h3>Informations Bien</h3>
        <ul>
          <li><strong>Type:</strong> ${propertyTypeLabel}</li>
          <li><strong>Adresse:</strong> ${address}</li>
        </ul>

        ${message ? `<h3>Message</h3><p>${message}</p>` : ""}

        <hr>
        <p><small>Reçu le ${new Date().toLocaleString("fr-BE", {
          timeZone: "Europe/Brussels",
        })}</small></p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Failed to send email" }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, emailId: data?.id }),
    };
  } catch (error) {
    console.error("Error in send-email function:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};

export { handler };
