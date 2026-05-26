import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-black text-primary">PR</span>
              <span className="text-2xl font-bold tracking-tight">PRODUCCIONES</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Coordinamos toda la logística, activación comercial y manejo de seguridad de tus eventos en todo el territorio colombiano.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Trabajamos las 24 horas</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-white/90">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/servicios" className="text-sm text-white/70 hover:text-primary transition-colors duration-200">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/personal" className="text-sm text-white/70 hover:text-primary transition-colors duration-200">
                  Personal
                </Link>
              </li>
              <li>
                <Link to="/activacion-btl" className="text-sm text-white/70 hover:text-primary transition-colors duration-200">
                  Activación BTL
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-sm text-white/70 hover:text-primary transition-colors duration-200">
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/sobre-pablo" className="text-sm text-white/70 hover:text-primary transition-colors duration-200">
                  Sobre Pablo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-white/90">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+573117318419"
                  className="flex items-center space-x-3 text-sm text-white/70 hover:text-primary transition-colors duration-200"
                >
                  <div className="p-2 bg-white/5 rounded-md">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">+57 311 731 8419</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pablorozo@prproducciones.com"
                  className="flex items-center space-x-3 text-sm text-white/70 hover:text-primary transition-colors duration-200"
                >
                  <div className="p-2 bg-white/5 rounded-md">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">pablorozo@prproducciones.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-white/90">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/PabloRozo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-primary transition-all duration-200 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/PabloRozo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-primary transition-all duration-200 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Tagline & Closing Phrase */}
        <div className="mt-16 pt-10 border-t border-white/10 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight">
            AQUELLO QUE NO PUEDES DECIR, LO DECIMOS POR TI
          </h2>
          <p className="text-base text-white/80 font-medium leading-relaxed max-w-3xl mx-auto">
            Comunicamos de manera eficiente todo lo relacionado con tu negocio. No te dejes confundir, es la mejor opción si quieres activar. Llama, cotiza, pregunta, no te quedes quieto.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/50 font-medium">
            © {new Date().getFullYear()} PR PRODUCCIONES. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;