import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Clock } from 'lucide-react';

const KwaiIcon = ({ className }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.315 12.264c2.33 0 4.218 1.88 4.218 4.2V19.8c0 2.32-1.888 4.2-4.218 4.2h-6.202a4.218 4.218 0 0 1-4.023-2.938l-3.676 1.833a2.04 2.04 0 0 1-2.731-.903 2.015 2.015 0 0 1-.216-.907v-5.94a2.03 2.03 0 0 1 2.035-2.024 2.044 2.044 0 0 1 .919.218l3.673 1.85a4.218 4.218 0 0 1 4.02-2.925zm-.062 2.162h-6.078c-1.153 0-2.09.921-2.108 2.065v3.247c0 1.148.925 2.081 2.073 2.1h6.113c1.153 0 2.09-.922 2.109-2.065v-3.247a2.104 2.104 0 0 0-2.074-2.1zM4.18 15.72a.554.554 0 0 0-.555.542v3.734a.556.556 0 0 0 .798.496l.01-.004 3.463-1.756V17.51l-3.467-1.73a.557.557 0 0 0-.249-.06zM9.28 0a5.667 5.667 0 0 1 4.98 2.965 4.921 4.921 0 0 1 3.36-1.317c2.714 0 4.913 2.177 4.913 4.863 0 2.686-2.2 4.863-4.912 4.863a4.921 4.921 0 0 1-3.996-2.034 5.651 5.651 0 0 1-4.345 2.034c-3.131 0-5.67-2.546-5.67-5.687C3.61 2.546 6.149 0 9.28 0Zm8.34 3.926c-1.441 0-2.61 1.157-2.61 2.585s1.169 2.585 2.61 2.585c1.443 0 2.612-1.157 2.612-2.585s-1.169-2.585-2.611-2.585zM9.28 2.287a3.395 3.395 0 0 0-3.39 3.4c0 1.877 1.518 3.4 3.39 3.4a3.395 3.395 0 0 0 3.39-3.4c0-1.878-1.518-3.4-3.39-3.4z"/>
  </svg>
);

const TiktokIcon = ({ className }) => (
  <svg fill="currentColor" viewBox="0 0 16 16" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
  </svg>
);

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
                <Link to="/nosotros" className="text-sm text-white/70 hover:text-primary transition-colors duration-200">
                  Nosotros
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
                  href="mailto:pabloemiliorozo85@gmail.com"
                  className="flex items-center space-x-3 text-sm text-white/70 hover:text-primary transition-colors duration-200"
                >
                  <div className="p-2 bg-white/5 rounded-md">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">pabloemiliorozo85@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-white/90">Síguenos</h3>
            <div className="flex space-x-3 flex-wrap gap-y-3">
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
              <a
                href="https://tiktok.com/@PabloRozo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-primary transition-all duration-200 hover:-translate-y-1"
                aria-label="TikTok"
              >
                <TiktokIcon className="w-5 h-5" />
              </a>
              <a
                href="https://kwai.com/@PabloRozo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-primary transition-all duration-200 hover:-translate-y-1"
                aria-label="Kwai"
              >
                <KwaiIcon className="w-5 h-5" />
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