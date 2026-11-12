import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Layout from '@/components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';

// La página de inicio se carga de inmediato; el resto se descarga solo al visitarla.
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const PersonalPage = lazy(() => import('./pages/PersonalPage.jsx'));
const ActivacionBTLPage = lazy(() => import('./pages/ActivacionBTLPage.jsx'));
const EventosPage = lazy(() => import('./pages/EventosPage.jsx'));
const NosotrosPage = lazy(() => import('./pages/NosotrosPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

// Rutas que se pre-renderizan a HTML en el build (ver tools/prerender.mjs).
export const prerenderRoutes = ['/', '/servicios', '/personal', '/activacion-btl', '/eventos', '/nosotros', '/contacto'];

// Rutas del sitio. El Router (navegador o servidor) lo pone quien monta la app.
function App() {
  return (
    // reducedMotion="user": sin animaciones para quien las tiene desactivadas en su sistema.
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/activacion-btl" element={<ActivacionBTLPage />} />
          <Route path="/eventos" element={<EventosPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}

export default App;
