import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/*
 * GTM with Consent Mode v2. A single inline script guarantees order:
 * consent default (all denied) → stored choice re-applied → gtm.js loads.
 * Without NEXT_PUBLIC_GTM_ID nothing is injected.
 */
export function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    <Script
      id="gtm-consent-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});
try {
  var stored = localStorage.getItem('kansabi_consent');
  if (stored) {
    var c = JSON.parse(stored);
    gtag('consent', 'update', {
      analytics_storage: c.analytics ? 'granted' : 'denied',
      ad_storage: c.marketing ? 'granted' : 'denied',
      ad_user_data: c.marketing ? 'granted' : 'denied',
      ad_personalization: c.marketing ? 'granted' : 'denied'
    });
  }
} catch (e) {}
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`,
      }}
    />
  );
}
