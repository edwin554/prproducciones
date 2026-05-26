import React from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Mail, Facebook, Instagram, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - PR PRODUCCIONES</title>
        <meta name="description" content="AQUELLO QUE NO PUEDES DECIR, LO DECIMOS POR TI. Contáctanos para cotizar tu evento. 24/7 Disponibles en todo Colombia." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter">
              AQUELLO QUE NO PUEDES DECIR, <br/><span className="text-primary">LO DECIMOS POR TI</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Comunicamos de manera eficiente todo lo relacionado con tu negocio. Estamos listos para hacer realidad tu evento.
            </p>
            <div className="mt-8 inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg">
              <Clock className="w-5 h-5" />
              <span>24/7 Disponibles</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-spacing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-card p-8 rounded-3xl shadow-xl border border-border">
                <h2 className="text-3xl font-black text-foreground mb-8">Envíanos un mensaje</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-black text-foreground mb-8">Información de contacto</h2>
                  <div className="space-y-4">
                    <a
                      href="tel:+573117318419"
                      className="flex items-center space-x-6 p-6 rounded-2xl bg-muted hover:bg-primary/5 transition-all duration-300 group border border-transparent hover:border-primary/20"
                    >
                      <div className="p-4 rounded-xl bg-white shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Phone className="w-7 h-7 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">Teléfono / WhatsApp</div>
                        <div className="text-2xl font-black text-foreground">+57 311 731 8419</div>
                      </div>
                    </a>

                    <a
                      href="mailto:pablorozo@prproducciones.com"
                      className="flex items-center space-x-6 p-6 rounded-2xl bg-muted hover:bg-primary/5 transition-all duration-300 group border border-transparent hover:border-primary/20"
                    >
                      <div className="p-4 rounded-xl bg-white shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Mail className="w-7 h-7 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">Correo electrónico</div>
                        <div className="text-xl font-black text-foreground break-all">pablorozo@prproducciones.com</div>
                      </div>
                    </a>

                    <div className="flex items-center space-x-6 p-6 rounded-2xl bg-muted">
                      <div className="p-4 rounded-xl bg-white shadow-sm">
                        <MapPin className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">Cobertura</div>
                        <div className="text-xl font-black text-foreground">Todo el territorio nacional</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-2xl font-black text-foreground mb-6">Síguenos en redes</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com/PabloRozo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-2xl bg-muted hover:bg-primary hover:text-white transition-all duration-300 group"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-7 h-7" />
                    </a>
                    <a
                      href="https://instagram.com/PabloRozo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-2xl bg-muted hover:bg-primary hover:text-white transition-all duration-300 group"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-7 h-7" />
                    </a>
                  </div>
                </div>

                {/* Closing Phrase */}
                <div className="bg-primary text-white rounded-2xl p-8 shadow-lg">
                  <p className="text-xl font-bold leading-relaxed">
                    No te dejes confundir, es la mejor opción si quieres activar. Llama, cotiza, pregunta, no te quedes quieto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;