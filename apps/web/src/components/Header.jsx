import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Personal', path: '/personal' },
    { name: 'Activación BTL', path: '/activacion-btl' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Badge */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-primary">PR</div>
                <div className="text-xl font-semibold text-secondary hidden sm:block">PRODUCCIONES</div>
              </Link>
              <div className="hidden md:flex lg:hidden xl:flex items-center space-x-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase whitespace-nowrap">
                <Clock className="w-3 h-3 mr-1" />
                24/7 Disponibles
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 flex-shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-1.5 xl:px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive(link.path)
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-shrink-0">
              <a href="tel:+573117318419" className="flex items-center space-x-1.5 xl:space-x-2 text-sm text-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium whitespace-nowrap">+57 311 731 8419</span>
              </a>
              <Button asChild className="bg-primary hover:bg-primary/90 flex-shrink-0">
                <Link to="/contacto">Cotiza ahora</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="px-4 py-3 bg-primary/5 flex items-center justify-center text-primary text-sm font-bold uppercase tracking-wide">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Disponibles
            </div>
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+573117318419"
                  className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-accent text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>+57 311 731 8419</span>
                </a>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>
                    Cotiza ahora
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/573117318419"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Contact via WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  );
};

export default Header;