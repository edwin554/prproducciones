import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { getConsent, isAnalyticsConfigured, onConsentChange, setConsent } from '@/lib/analytics';
import { cookieConsentContent } from '@/data/site';

// Aviso de cookies de medición. Solo aparece en el navegador (no en el HTML
// pre-renderizado) y solo si la analítica está configurada y aún no hay elección.
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isAnalyticsConfigured()) return undefined;
    setVisible(getConsent() === null);
    return onConsentChange((value) => setVisible(value === null));
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={cookieConsentContent.title}
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-border bg-white p-5 shadow-2xl shadow-black/20 sm:inset-x-6"
    >
      <p className="mb-1 text-sm font-bold text-foreground">{cookieConsentContent.title}</p>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{cookieConsentContent.description}</p>
      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <Button variant="outline" onClick={() => setConsent('denied')}>
          {cookieConsentContent.rejectLabel}
        </Button>
        <Button className="premium-button border border-white/10" onClick={() => setConsent('granted')}>
          {cookieConsentContent.acceptLabel}
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
