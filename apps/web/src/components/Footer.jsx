import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock } from 'lucide-react';
import { socialIconMap } from '@/components/icons/SocialIcons';
import { footerQuickLinks, siteConfig, socialLinks } from '@/data/site';

const Footer = () => {
  return (
    <footer className="dark dark-premium-section text-white">
      <div className="absolute left-[-8%] bottom-0 h-56 w-56 rounded-full bg-primary/20 blur-3xl opacity-70 mix-blend-screen pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-black text-primary">{siteConfig.brand.monogram}</span>
              <span className="text-2xl font-bold tracking-tight">{siteConfig.brand.displayName}</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {siteConfig.footer.description}
            </p>
            <div className="premium-panel inline-flex items-center space-x-2 px-4 py-2 rounded-lg">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">{siteConfig.footer.workdayLabel}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-white/90">Enlaces rápidos</h3>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/70 hover:text-primary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-white/90">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.phone.href}
                  className="flex items-center space-x-3 text-sm text-white/70 hover:text-primary transition-colors duration-200"
                >
                  <div className="p-2 bg-white/5 rounded-md">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{siteConfig.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.email.href}
                  className="flex items-center space-x-3 text-sm text-white/70 hover:text-primary transition-colors duration-200"
                >
                  <div className="p-2 bg-white/5 rounded-md">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{siteConfig.email.display}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-white/90">Síguenos</h3>
            <div className="flex space-x-3 flex-wrap gap-y-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.iconKey];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="premium-surface p-3 rounded-xl shadow-lg shadow-primary/10 transition-all duration-200 hover:-translate-y-1"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tagline & Closing Phrase */}
        <div className="mt-16 pt-10 border-t border-white/10 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight">
            {siteConfig.footer.tagline}
          </h2>
          <p className="text-base text-white/80 font-medium leading-relaxed max-w-3xl mx-auto">
            {siteConfig.footer.closingText}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/50 font-medium">
            © {new Date().getFullYear()} {siteConfig.brand.displayName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;