import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';

// La página de inicio se carga de inmediato; el resto se descarga solo al visitarla.
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const PersonalPage = lazy(() => import('./pages/PersonalPage.jsx'));
const ActivacionBTLPage = lazy(() => import('./pages/ActivacionBTLPage.jsx'));
const EventosPage = lazy(() => import('./pages/EventosPage.jsx'));
const NosotrosPage = lazy(() => import('./pages/NosotrosPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));

const PageFallback = () => <div className="min-h-screen bg-white" aria-busy="true" />;

// Componente principal de la aplicación que gestiona las rutas del sitio web.
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/activacion-btl" element={<ActivacionBTLPage />} />
          <Route path="/eventos" element={<EventosPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Toaster />
    </Router>
  );
}

export default App;
