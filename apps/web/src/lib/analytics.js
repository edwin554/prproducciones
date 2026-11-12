// Google Analytics 4 con consentimiento previo:
// no se carga nada de Google hasta que el visitante acepta las cookies de medición.
import { analyticsConfig } from '@/data/site';

const CONSENT_KEY = 'prp-analytics-consent';
const CONSENT_EVENT = 'prp:consent-change';

const measurementId = analyticsConfig.ga4MeasurementId;
let loaded = false;

export const isAnalyticsConfigured = () => Boolean(measurementId);

export function getConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY); // 'granted' | 'denied' | null
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Sin almacenamiento (modo privado estricto): la elección dura solo esta visita.
  }
  if (value === 'granted') {
    loadAnalytics();
    trackPageView();
  } else if (loaded) {
    window.gtag('consent', 'update', { analytics_storage: 'denied' });
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

// Permite volver a mostrar el aviso (enlace "Preferencias de cookies" del footer).
export function resetConsent() {
  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    // ignorar
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}

export function onConsentChange(callback) {
  const handler = (event) => callback(event.detail);
  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
}

function loadAnalytics() {
  if (loaded || !measurementId || typeof window === 'undefined') return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag necesita el objeto `arguments`, no un array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag('js', new Date());
  // Las vistas de página se envían a mano en cada cambio de ruta (es una SPA).
  window.gtag('config', measurementId, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

function canTrack() {
  return Boolean(measurementId) && typeof window !== 'undefined' && getConsent() === 'granted';
}

// Al cargar la página: si ya había aceptado antes, empezar a medir.
export function initAnalytics() {
  if (canTrack()) loadAnalytics();
}

export function trackPageView() {
  if (!canTrack()) return;
  loadAnalytics();
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
  });
}

export function trackEvent(name, params = {}) {
  if (!canTrack()) return;
  loadAnalytics();
  window.gtag('event', name, params);
}

// Clics en enlaces de contacto, en cualquier parte del sitio.
export function trackContactClicks(event) {
  const link = event.target.closest?.('a[href]');
  if (!link) return;
  const href = link.getAttribute('href');
  const location =
    link.dataset.trackLocation ?? (link.closest('header') ? 'header' : link.closest('footer') ? 'footer' : 'pagina');

  // Sin enviar números ni correos: Google Analytics no admite datos personales.
  if (href.startsWith('https://wa.me/')) {
    trackEvent('click_whatsapp', { link_location: location });
  } else if (href.startsWith('tel:')) {
    trackEvent('click_phone', { link_location: location });
  } else if (href.startsWith('mailto:')) {
    trackEvent('click_email', { link_location: location });
  }
}
