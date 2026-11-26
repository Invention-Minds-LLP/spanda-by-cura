/**
 * Contact details for SPANDA by Cura.
 * Per the developer handoff, no phone, WhatsApp, email or street address may be published until verified.
 * Fill these in once confirmed; until then the site shows "to be confirmed" and hides the call links.
 */
export const SITE = {
  name: 'SPANDA by Cura',
  descriptor: 'Centre For Rehabilitation & Recovery',
  locality: 'Whitefield, Bengaluru',
  region: 'Karnataka, India',

  /** Verified phone for display, e.g. '+91 80 0000 0000'. Empty until confirmed. */
  phoneDisplay: '',
  /** Digits with country code for tel: links. Empty until confirmed. */
  phoneHref: '',
  /** Verified WhatsApp business number, international format without +. Empty until confirmed. */
  whatsapp: '',
  /** Verified enquiry email. Empty until confirmed. */
  email: '',

  /**
   * Tracking (same stack as the agency's other healthcare sites). Leave empty until the client approves
   * tracking and the privacy notice; nothing loads while empty. Consent Mode v2 defaults to "denied".
   */
  gtmId: '', // e.g. 'GTM-XXXXXXX' – GA4, Google Ads conversions, call tracking, Meta pixel are configured inside GTM.
};

export function whatsappLink(message: string): string {
  return SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}` : '';
}
