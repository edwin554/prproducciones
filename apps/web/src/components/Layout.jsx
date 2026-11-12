import React, { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import CookieConsent from '@/components/CookieConsent.jsx';
import { initAnalytics, trackContactClicks } from '@/lib/analytics';

// Estructura común: el header y el footer se mantienen montados al navegar
// y solo cambia el contenido de la página.
const Layout = () => {
  useEffect(() => {
    initAnalytics();
    // Medir clics en WhatsApp, teléfonos y correos de todo el sitio.
    document.addEventListener('click', trackContactClicks);
    return () => document.removeEventListener('click', trackContactClicks);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div className="min-h-screen bg-background" aria-busy="true" />}>
        <Outlet />
      </Suspense>
      <Footer />
      <Toaster />
      <CookieConsent />
    </>
  );
};

export default Layout;
