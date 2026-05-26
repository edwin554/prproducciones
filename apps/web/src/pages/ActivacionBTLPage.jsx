import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ActivacionBTLPage = () => {
  const whyChooseUsPoints = [
    {
      title: "Presentación Impecable",
      description: "Puntualidad, pulcritud y excelente presentación personal de todo nuestro equipo en el punto de activación."
    },
    {
      title: "Personal Calificado",
      description: "Equipo que se preocupa por entender la necesidad específica de tu espacio comercial para conectar con tu audiencia."
    },
    {
      title: "Valor Agregado",
      description: "Entregamos el valor agregado que busca una gran empresa, mediana o negocio emergente para destacar."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Activación BTL - PR PRODUCCIONES</title>
        <meta name="description" content="NO PIERDAS MAS DINERO ACTIVA CON NOSOTROS. Impactamos con estrategia tu espacio comercial para que tu flujo de caja sea contundente." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[80dvh] flex items-center justify-center overflow-hidden bg-secondary">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1609869510749-19872196be1e"
              alt="Activación BTL profesional"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-primary font-black tracking-widest uppercase mb-6 text-lg md:text-xl">
                Estrategia Directa
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tighter">
                NO PIERDAS MAS DINERO <br/><span className="text-primary">ACTIVA CON NOSOTROS</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium">
                Todas las estrategias BTL, por más descabelladas que sean, las hacemos posibles.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                  Impactamos con estrategia tu espacio comercial
                </h2>
                <p className="text-xl text-white/90 font-medium leading-relaxed">
                  Para que tu flujo de caja sea contundente. Aumentar tus ventas y crear la mejor impresión es nuestro objetivo principal.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <Target className="w-10 h-10 mb-4 text-white" />
                  <h3 className="text-xl font-bold mb-2">Estrategia</h3>
                  <p className="text-white/80">Acciones dirigidas al público correcto.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <TrendingUp className="w-10 h-10 mb-4 text-white" />
                  <h3 className="text-xl font-bold mb-2">Resultados</h3>
                  <p className="text-white/80">Aumento directo en flujo de caja.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose Us Section */}
        <section className="section-spacing bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight">
                Por qué elegirnos para tu BTL
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUsPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl transition-all duration-300"
                >
                  <CheckCircle2 className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">{point.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/20 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                Impulsa tu marca con nosotros
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                Contáctanos hoy y descubre cómo podemos activar tu marca de manera efectiva, creativa y profesional. 24/7 Disponibles.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-bold transition-all duration-200 active:scale-[0.98] shadow-xl shadow-primary/20">
                <Link to="/contacto">
                  Solicitar cotización
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ActivacionBTLPage;