import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';

// Estructura común: el header y el footer se mantienen montados al navegar
// y solo cambia el contenido de la página.
const Layout = () => (
  <>
    <ScrollToTop />
    <Header />
    <Suspense fallback={<div className="min-h-screen bg-background" aria-busy="true" />}>
      <Outlet />
    </Suspense>
    <Footer />
    <Toaster />
  </>
);

export default Layout;
