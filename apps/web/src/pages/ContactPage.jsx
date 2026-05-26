import React from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Mail, Facebook, Instagram, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

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
                      href="mailto:pabloemiliorozo85@gmail.com"
                      className="flex items-center space-x-6 p-6 rounded-2xl bg-muted hover:bg-primary/5 transition-all duration-300 group border border-transparent hover:border-primary/20"
                    >
                      <div className="p-4 rounded-xl bg-white shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Mail className="w-7 h-7 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">Correo electrónico</div>
                        <div className="text-xl font-black text-foreground break-all">pabloemiliorozo85@gmail.com</div>
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
                  <div className="flex space-x-4 flex-wrap gap-y-4">
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
                    <a
                      href="https://tiktok.com/@PabloRozo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-2xl bg-muted hover:bg-primary hover:text-white transition-all duration-300 group"
                      aria-label="TikTok"
                    >
                      <TiktokIcon className="w-7 h-7" />
                    </a>
                    <a
                      href="https://kwai.com/@PabloRozo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-2xl bg-muted hover:bg-primary hover:text-white transition-all duration-300 group"
                      aria-label="Kwai"
                    >
                      <KwaiIcon className="w-7 h-7" />
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