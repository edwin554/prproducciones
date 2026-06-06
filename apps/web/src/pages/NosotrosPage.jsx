import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Users, Megaphone, Clock, Settings, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { nosotrosPageContent, pageSeo } from '@/data/pages';

const pillarIconMap = {
  users: Users,
  shield: Shield,
  megaphone: Megaphone,
  music: Music,
  settings: Settings,
  clock: Clock,
};

const NosotrosPage = () => {
  return (
    <>
      <Helmet>
        <title>{pageSeo.nosotros.title}</title>
        <meta name="description" content={pageSeo.nosotros.description} />
        <link rel="canonical" href={pageSeo.nosotros.canonicalUrl} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 dark dark-premium-section text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute -left-10 top-16 h-44 w-44 rounded-full bg-primary/25 blur-3xl opacity-80 mix-blend-screen pointer-events-none"></div>
                  <img
                    src={nosotrosPageContent.hero.image}
                    alt={nosotrosPageContent.hero.imageAlt}
                    className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl border-4 border-white/10"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="premium-surface inline-flex items-center space-x-2 rounded-full border border-white/10 px-4 py-1.5 text-sm font-bold tracking-widest uppercase mb-6 text-white">
                  <Clock className="w-4 h-4" />
                  <span>{nosotrosPageContent.hero.badge}</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
                  {nosotrosPageContent.hero.title}
                </h1>
                <p className="text-2xl text-primary font-bold mb-6">
                  {nosotrosPageContent.hero.subtitle}
                </p>
                <p className="text-lg text-white/80 mb-8 leading-relaxed font-medium">
                  {nosotrosPageContent.hero.description}
                </p>
                <Button asChild size="lg" className="premium-button border border-white/10 px-10 py-7 text-lg font-bold text-white shadow-xl active:scale-[0.98]">
                  <Link to="/contacto">{nosotrosPageContent.hero.ctaLabel}</Link>
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
                {nosotrosPageContent.pillars.title}
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
                {nosotrosPageContent.pillars.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nosotrosPageContent.pillars.items.map((pillar, index) => {
                const Icon = pillarIconMap[pillar.iconKey];

                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{pillar.description}</p>
                </motion.div>
                );
              })}
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
                {nosotrosPageContent.liveMusic.title}
              </h2>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed font-medium">
                {nosotrosPageContent.liveMusic.description}
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {nosotrosPageContent.liveMusic.supportingText}
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
