// ────────────────────────────────────────────────────────────────
// Email notification configuration (EmailJS)
// ────────────────────────────────────────────────────────────────
// This portfolio has NO backend server, so the contact form uses
// EmailJS (https://www.emailjs.com) to send you an email notification
// directly from the visitor's browser — completely free for up to
// 200 emails/month.
//
// SETUP STEPS (5 minutes):
// 1. Go to https://www.emailjs.com and create a free account.
// 2. Add an "Email Service" (e.g. connect your Gmail) → copy the
//    Service ID it gives you.
// 3. Create an "Email Template" with variables like:
//      {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    → copy the Template ID.
// 4. Go to Account → General → copy your Public Key.
// 5. Paste all three values below.
//
// Until you fill these in, the form will show a friendly error asking
// the visitor to reach out via email/phone instead — it will NOT
// crash the site.
// ────────────────────────────────────────────────────────────────

export const EMAILJS_CONFIG = {
  SERVICE_ID: "YOUR_EMAILJS_SERVICE_ID",
  TEMPLATE_ID: "YOUR_EMAILJS_TEMPLATE_ID",
  PUBLIC_KEY: "YOUR_EMAILJS_PUBLIC_KEY",
};

export const isEmailConfigured = () =>
  EMAILJS_CONFIG.SERVICE_ID !== "YOUR_EMAILJS_SERVICE_ID" &&
  EMAILJS_CONFIG.TEMPLATE_ID !== "YOUR_EMAILJS_TEMPLATE_ID" &&
  EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY";

// The email address that should receive contact-form notifications.
// (Also used in the EmailJS template as {{to_email}} if you want it.)
export const NOTIFICATION_EMAIL = "mohitsharma14651@gmail.com";
