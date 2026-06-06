import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import PersonalPage from './pages/PersonalPage.jsx';
import ActivacionBTLPage from './pages/ActivacionBTLPage.jsx';
import EventosPage from './pages/EventosPage.jsx';
import NosotrosPage from './pages/NosotrosPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

// Componente principal de la aplicación que gestiona las rutas del sitio web.
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/activacion-btl" element={<ActivacionBTLPage />} />
        <Route path="/eventos" element={<EventosPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;