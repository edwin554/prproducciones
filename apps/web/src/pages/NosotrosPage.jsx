import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Users, Megaphone, Clock, Settings, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const NosotrosPage = () => {
  const pillars = [
    { icon: Users, title: 'Logística Integral', description: 'Planificación minuciosa y coordinación operativa de eventos de cualquier escala.' },
    { icon: Shield, title: 'Seguridad Comercial', description: 'Coordinación de vigilancia, control de accesos y escoltas profesionales.' },
    { icon: Megaphone, title: 'Activación de Marca / BTL', description: 'Estrategias de marketing no convencionales en puntos de venta y eventos.' },
    { icon: Music, title: 'Entretenimiento y Shows', description: 'Booking artístico, contratación de grupos musicales y shows de animación.' },
    { icon: Settings, title: 'Producción Técnica', description: 'Montaje de sistemas de sonido profesional, iluminación y pantallas LED.' },
    { icon: Clock, title: 'Soporte 24/7', description: 'Atención ininterrumpida y capacidad de respuesta inmediata a nivel nacional.' },
  ];

  return (
    <>
      <Helmet>
        <title>Nosotros - PR PRODUCCIONES</title>
        <meta name="description" content="Conoce a PR PRODUCCIONES. Productora y agencia de eventos integral con cobertura nacional y atención 24/7." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1703763872638-bd28599b6c36"
                  alt="Equipo profesional de PR PRODUCCIONES"
                  className="w-full h-[600px] object-cover rounded-3xl shadow-2xl border-4 border-white/10"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Disponibles</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
                  PR Producciones
                </h1>
                <p className="text-2xl text-primary font-bold mb-6">
                  Productora y Agencia de Eventos Profesional
                </p>
                <p className="text-lg text-white/80 mb-8 leading-relaxed font-medium">
                  Somos una productora integral con amplia experiencia en la logística, coordinación de personal, seguridad y producción técnica para todo tipo de eventos a nivel nacional. Combinamos visión empresarial, talento calificado y tecnología para garantizar resultados excepcionales y hacer realidad tus proyectos en cualquier parte del país.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-bold transition-all duration-200 active:scale-[0.98] shadow-xl">
                  <Link to="/contacto">Trabajar con nosotros</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="section-spacing bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                Experiencia y capacidades
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
                Soluciones integrales con cobertura en todo el país
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Music & Entertainment Section */}
        <section className="py-24 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 tracking-tight">
                Música en Vivo y Entretenimiento
              </h2>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed font-medium">
                Como parte de nuestras soluciones de entretenimiento, contamos con alianzas y agrupaciones musicales exclusivas como La Autonomía Vallenata, llevando la mejor música en vivo a escenarios de toda Colombia.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Nuestra amplia experiencia en producción artística y técnica nos permite entender y coordinar profundamente las necesidades de cada show, garantizando espectáculos memorables y de la más alta calidad para tu marca o evento social.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NosotrosPage;
