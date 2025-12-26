import "jsr:@supabase/functions-js/edge-runtime.d.ts";

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
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, phone, property_type, address, message }: ContactData = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ success: false, error: "Email service not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Send email using Resend
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "KCertif PEB <onboarding@resend.dev>",
        to: ["info@kcertipeb.be"],
        subject: `Nouvelle demande PEB - ${property_type}`,
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
            <li><strong>Type:</strong> ${property_type}</li>
            <li><strong>Adresse:</strong> ${address}</li>
          </ul>
          
          ${message ? `<h3>Message</h3><p>${message}</p>` : ''}
          
          <hr>
          <p><small>Reçu le ${new Date().toLocaleString('fr-BE', { timeZone: 'Europe/Brussels' })}</small></p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend API error:", errorData);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to send email" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    return new Response(
      JSON.stringify({ success: true, emailId: emailData.id }),
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