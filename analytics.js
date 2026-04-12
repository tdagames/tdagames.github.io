/**
 * ============================================================
 * TDAgames - Google Analytics 4 (GA4) Setup
 * ============================================================
 * SETUP INSTRUCTIONS:
 * 1. Go to: https://analytics.google.com/
 * 2. Create a new GA4 property for: https://blinkgames007.github.io/
 * 3. Copy your Measurement ID (format: G-XXXXXXXXXX)
 * 4. Replace "G-XXXXXXXXXX" below with your actual ID
 * 5. Add this script to ALL your HTML pages inside <head>:
 *
 *    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
 *    <script src="analytics.js"></script>
 *
 * ============================================================
 */

// ✅ Replace this with your real GA4 Measurement ID
const GA_MEASUREMENT_ID = "G-LVKV7E3E9Y";

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID, {
  page_title: document.title,
  page_location: window.location.href,
  // Optional: anonymize IP for privacy compliance
  anonymize_ip: true
});

/**
 * ============================================================
 * OPTIONAL: Track custom game play events
 * Usage: trackGamePlay('Subway Surfers Tokyo')
 * ============================================================
 */
function trackGamePlay(gameName) {
  gtag('event', 'game_play', {
    event_category: 'Games',
    event_label: gameName,
    value: 1
  });
}

/**
 * Track page views on navigation (useful for SPA-style pages)
 */
function trackPageView(pageTitle, pageUrl) {
  gtag('event', 'page_view', {
    page_title: pageTitle || document.title,
    page_location: pageUrl || window.location.href
  });
}
