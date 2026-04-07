import { supabase } from './supabase';

export interface ContactSubmissionPayload {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  surfaceRange: string;
  address: string;
  message?: string;
}

const isSurfaceRangeSchemaError = (error: { code?: string; message?: string } | null) => {
  if (!error) {
    return false;
  }

  return error.code === 'PGRST204' || error.message?.includes('surface_range') || false;
};

export const insertContactSubmission = async (payload: ContactSubmissionPayload) => {
  if (!supabase) {
    throw new Error('Supabase client unavailable');
  }

  const submission = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    property_type: payload.propertyType,
    surface_range: payload.surfaceRange || null,
    address: payload.address.trim(),
    message: payload.message?.trim() || '',
  };

  let result = await supabase.from('contact_submissions').insert([submission]);

  if (isSurfaceRangeSchemaError(result.error)) {
    const fallbackSubmission = {
      name: submission.name,
      email: submission.email,
      phone: submission.phone,
      property_type: submission.property_type,
      address: submission.address,
      message: submission.message,
    };

    result = await supabase.from('contact_submissions').insert([fallbackSubmission]);
  }

  // ✅ ENVOI EMAIL VIA NETLIFY
  try {
    await fetch("/.netlify/functions/send-contact-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        property_type: submission.property_type,
        surface_range: submission.surface_range,
        address: submission.address,
        message: submission.message,
      }),
    });

    console.log("✅ Email envoyé via Netlify");
  } catch (err) {
    console.error("❌ Erreur envoi email:", err);
  }

  return result;
};