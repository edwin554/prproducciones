import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mic, Music, Radio, Award, Users, Megaphone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const PabloRozoPage = () => {
  const skills = [
    { icon: Mic, title: 'Voz comercial', description: 'Lenguaje asertivo y fluidez profesional' },
    { icon: Music, title: 'Cantante y compositor', description: 'Productor vallenato reconocido' },
    { icon: Radio, title: 'Locutor profesional', description: 'Manejo experto de micrófono' },
    { icon: Award, title: 'Líder de La Autonomía Vallenata', description: 'Agrupación musical destacada' },
    { icon: Users, title: 'Músico y artista', description: 'Experiencia en múltiples géneros' },
    { icon: Megaphone, title: 'Embajador de marca', description: 'Representación profesional de marcas' },
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Pablo Rozo - PR PRODUCCIONES</title>
        <meta name="description" content="Conoce a Pablo Rozo, director ejecutivo de PR PRODUCCIONES. Profesional integral disponible 24/7 para la producción de tus eventos." />
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
                  alt="Pablo Rozo - Director Ejecutivo de PR PRODUCCIONES"
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
                  Pablo Rozo
                </h1>
                <p className="text-2xl text-primary font-bold mb-6">
                  Director ejecutivo de PR PRODUCCIONES
                </p>
                <p className="text-lg text-white/80 mb-8 leading-relaxed font-medium">
                  Profesional integral con amplia experiencia en producción de eventos, música vallenata y comunicación comercial. Líder de <span className="text-white font-bold">La Autonomía Vallenata</span>, combinando talento artístico con visión empresarial para garantizar resultados excepcionales en cualquier momento que lo necesites.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-bold transition-all duration-200 active:scale-[0.98] shadow-xl">
                  <Link to="/contacto">Trabajar con Pablo</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-spacing bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                Experiencia y habilidades
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
                Un profesional multifacético con dominio en múltiples áreas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{skill.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* La Autonomía Vallenata Section */}
        <section className="py-24 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 tracking-tight">
                La Autonomía Vallenata
              </h2>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed font-medium">
                Como líder de esta reconocida agrupación musical, Pablo Rozo ha llevado la música vallenata a escenarios de todo Colombia, combinando tradición con innovación y creando experiencias memorables para miles de personas.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Su experiencia como cantante, compositor y productor vallenato le permite entender profundamente las necesidades artísticas y técnicas de cada evento, garantizando producciones de la más alta calidad.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PabloRozoPage;