import { useEffect } from 'react';
import { TRACKING_CONFIG, isTrackingConfigured, debugLog } from '../config/tracking';

// Declarações globais para TypeScript
declare global {
  interface Window {
    fbq: any;
    gtag: any;
    dataLayer: any;
  }
}

const Tracking = () => {
  useEffect(() => {
    if (!TRACKING_CONFIG.ENABLE_TRACKING) {
      debugLog('Tracking desabilitado (modo desenvolvimento)');
      return;
    }

    const configured = isTrackingConfigured();
    
    // Inicializar Facebook Pixel
    if (configured.facebook) {
      debugLog('Inicializando Facebook Pixel');
      initFacebookPixel();
    }

    // Inicializar Google Analytics
    if (configured.googleAnalytics) {
      debugLog('Inicializando Google Analytics');
      initGoogleAnalytics();
    }

    // Inicializar Google Tag Manager (opcional)
    if (configured.googleTagManager) {
      debugLog('Inicializando Google Tag Manager');
      initGoogleTagManager();
    }
  }, []);

  const initFacebookPixel = () => {
    // Facebook Pixel Code - versão simplificada
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${TRACKING_CONFIG.FACEBOOK_PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
  };

  const initGoogleAnalytics = () => {
    // Google Analytics Code
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_CONFIG.GOOGLE_ANALYTICS_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${TRACKING_CONFIG.GOOGLE_ANALYTICS_ID}');
    `;
    document.head.appendChild(script2);
  };

  const initGoogleTagManager = () => {
    // Google Tag Manager Code
    const script1 = document.createElement('script');
    script1.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${TRACKING_CONFIG.GOOGLE_TAG_MANAGER_ID}');
    `;
    document.head.appendChild(script1);

    // GTM noscript fallback
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${TRACKING_CONFIG.GOOGLE_TAG_MANAGER_ID}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(noscript);
  };

  return null; // Este componente não renderiza nada
};

// Funções utilitárias para eventos de conversão
export const trackEvent = {
  // Facebook Pixel Events
  facebookLead: () => {
    const configured = isTrackingConfigured();
    if (window.fbq && configured.facebook && TRACKING_CONFIG.ENABLE_TRACKING) {
      window.fbq('track', 'Lead');
      debugLog('Facebook Pixel: Lead event tracked');
    }
  },

  facebookCompleteRegistration: () => {
    const configured = isTrackingConfigured();
    if (window.fbq && configured.facebook && TRACKING_CONFIG.ENABLE_TRACKING) {
      window.fbq('track', 'CompleteRegistration');
      debugLog('Facebook Pixel: CompleteRegistration event tracked');
    }
  },

  // Google Analytics Events
  googleAnalyticsLead: () => {
    const configured = isTrackingConfigured();
    if (window.gtag && configured.googleAnalytics && TRACKING_CONFIG.ENABLE_TRACKING) {
      window.gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'workshop_registration'
      });
      debugLog('Google Analytics: Lead event tracked');
    }
  },

  googleAnalyticsFormSubmit: () => {
    const configured = isTrackingConfigured();
    if (window.gtag && configured.googleAnalytics && TRACKING_CONFIG.ENABLE_TRACKING) {
      window.gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: 'workshop_form'
      });
      debugLog('Google Analytics: Form submit event tracked');
    }
  },

  // Evento customizado combinado
  trackFormSubmission: () => {
    debugLog('Disparando eventos de conversão do formulário');
    trackEvent.facebookLead();
    trackEvent.facebookCompleteRegistration();
    trackEvent.googleAnalyticsLead();
    trackEvent.googleAnalyticsFormSubmit();
  }
};

export default Tracking;
