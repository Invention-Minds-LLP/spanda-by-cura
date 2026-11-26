# SPANDA by Cura – SEO and Google Ads plan

Adapted from the agency's live set-up on vasavihospitals.com (reviewed 26 November 2026), within the NMC
ethical-advertising guidance (Public Notice R-13014/01/2024-Ethics, 06/10/2026) and the DPDP Act 2023.

## What Vasavi does, and how SPANDA applies it

| Vasavi practice | SPANDA (done ✓ / to do ☐) |
|---|---|
| A keyword-led URL for every service and procedure (`/total-knee-replacement-in-bangalore`) | ✓ `/rehabilitation/<speciality>/<condition>`: 3 speciality pages and 29 condition guides, all prerendered |
| Title pattern "Service in Bangalore \| Brand" | ✓ e.g. "Stroke Rehabilitation in Whitefield, Bengaluru \| SPANDA" |
| Hospital, BreadcrumbList and FAQPage schema | ✓ MedicalClinic, BreadcrumbList, FAQPage and MedicalWebPage on every relevant page |
| Several short forms (name + mobile) on each service page | ✓ Inline "Call me back" form in every guide and speciality page, plus full forms on Home and Contact |
| Sticky Call / WhatsApp | ✓ Mobile action bar; Call and WhatsApp appear as soon as verified numbers are added to `src/app/site.config.ts` |
| GTM + GA4 + Google Ads conversions + call tracking + Meta pixel + Clarity | ✓ GTM loader with Consent Mode v2 and a consent banner. ☐ Add `gtmId` to `site.config.ts`, then set up GA4, Ads conversion (`generate_lead`, `click_to_call`, `whatsapp_click`), Google call-forwarding numbers and Meta pixel inside GTM |
| Blog with its own sitemap | ☐ Add a blog (patient-education articles) once clinical review capacity exists |
| Doctors directory | ☐ Add when names, qualifications and NMC/SMR numbers are confirmed (NMC 9.1 allows a factual directory) |
| Cost and insurance estimate form | ☐ Only if the centre confirms fees and insurer arrangements; any fees must be factual (NMC 8.1 x) |

## Do not copy (NMC risk under the October 2026 notice)
- Patient testimonials and "Real Stories" (Explanation V, 6.2, 8.1 v, 8.1 xi). Note that vasavihospitals.com currently shows a "Real Stories. Real Experiences." section.
- "Why choose us" superiority copy, "best", "leading", "trusted" (8.1 ix).
- Urgency or fear copy such as "Why ignoring X is risky" (8.1 i, no fear-based marketing).
- Discounts, free consultations and offers (8.1 x).
- Doctor photographs used as promotion (9.2).
- AI images without an "AI-generated" label (7.2).

## Google Ads set-up (when the centre approves)
- **Campaigns:** three Search campaigns (Orthopaedic, Neurological, Pulmonary).
  - Each ad group points to its condition guide, e.g. "stroke rehabilitation bangalore" → `/rehabilitation/neurological/stroke`. Use UTM parameters.
  - Location: Whitefield plus a 10–15 km radius (Mahadevapura, KR Puram, Marathahalli, Brookefield, Varthur, Hoskote).
- **Healthcare policy:**
  - No remarketing or personalised ads based on health browsing (Google's personalised-advertising policy for health). Consent Mode keeps `ad_personalization` denied.
  - Conversion events carry no names, numbers, conditions or condition URLs.
- **Assets:** call asset (verified number), location asset (Google Business Profile), sitelinks to the three speciality pages and Patient information.
- **Ad copy:** factual and neutral, for example "Assessment-led stroke rehabilitation in Whitefield. Request a callback." No claims of outcomes or superiority.

## Local SEO
- **Google Business Profile:** create and verify it at the exact address, with category "Rehabilitation center" and secondary "Physiotherapy center".
  - Use the same name, address and phone (NAP) as the website.
  - Use only real photographs.
- **Directories:** list on Practo, Justdial and Google Maps with consistent NAP.
- **Search Console:** submit `sitemap.xml` after launch (set `SITE_INDEXABLE=true` in Netlify), and monitor Core Web Vitals.
