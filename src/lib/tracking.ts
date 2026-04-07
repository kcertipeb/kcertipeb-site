const GOOGLE_ADS_PHONE_CONVERSION = 'AW-17839824839/9dHFCOCL0fkbEMe_2LpC';
const GOOGLE_ADS_LEAD_CONVERSION = 'AW-17839824839/nXPRCL3xxfkbEMe_2LpC';
const GOOGLE_ADS_WHATSAPP_CONVERSION = 'AW-17839824839/ZrvBCLGd0_kbEMe_2LpC';
const PENDING_LEAD_KEY = 'pending_google_ads_lead_conversion';

export const trackPhoneCallConversion = () => {
  window.gtag?.('event', 'conversion', {
    send_to: GOOGLE_ADS_PHONE_CONVERSION,
    value: 1.0,
    currency: 'EUR',
  });
};

export const trackLeadFormConversion = (transactionId?: string) => {
  window.gtag?.('event', 'conversion', {
    send_to: GOOGLE_ADS_LEAD_CONVERSION,
    ...(transactionId ? { transaction_id: transactionId } : {}),
  });
};

export const trackWhatsAppConversion = () => {
  window.gtag?.('event', 'conversion', {
    send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
  });
};

export const trackMetaLeadConversion = (value = 150) => {
  window.fbq?.('track', 'Lead', {
    value,
    currency: 'EUR',
  });
};

export const markPendingLeadConversion = () => {
  sessionStorage.setItem(PENDING_LEAD_KEY, '1');
};

export const consumePendingLeadConversion = () => {
  const hasPendingLead = sessionStorage.getItem(PENDING_LEAD_KEY) === '1';

  if (hasPendingLead) {
    sessionStorage.removeItem(PENDING_LEAD_KEY);
  }

  return hasPendingLead;
};
