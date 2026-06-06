import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle2, Clock, ShieldCheck, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PersonalCategoryCard from '@/components/PersonalCategoryCard.jsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { pageSeo, personalPageContent } from '@/data/pages';

const PersonalPage = () => {
  return (
    <>
      <Helmet>
        <title>{pageSeo.personal.title}</title>
        <meta name="description" content={pageSeo.personal.description} />
        <link rel="canonical" href={pageSeo.personal.canonicalUrl} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="dark dark-premium-section text-white py-24">
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="premium-surface inline-flex items-center space-x-2 rounded-full border border-white/10 px-4 py-1.5 text-sm font-bold tracking-widest uppercase text-white">
                <Clock className="h-4 w-4" />
                <span>{personalPageContent.badge}</span>
              </div>

              <div className="space-y-5">
                <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  {personalPageContent.title}
                </h1>
                <p className="max-w-3xl text-xl font-medium leading-relaxed text-white/90">
                  {personalPageContent.description}
                </p>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {personalPageContent.summaryItems.map((item) => (
                  <li
                    key={item}
                    className="premium-panel flex items-start gap-3 rounded-2xl p-4 text-left"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-6 text-white/85">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <div className="premium-panel min-w-[180px] rounded-2xl px-5 py-4">
                  <div className="text-3xl font-black text-white">{personalPageContent.categories.length}+</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.25em] text-white/60">
                    perfiles disponibles
                  </div>
                </div>
                <div className="premium-panel min-w-[180px] rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-2 text-3xl font-black text-white">
                    <ShieldCheck className="h-7 w-7 text-primary" />
                    24/7
                  </div>
                  <div className="mt-1 text-sm uppercase tracking-[0.25em] text-white/60">
                    disponibilidad real
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40">
                <img
                  src={personalPageContent.image}
                  alt={personalPageContent.imageAlt}
                  className="h-[520px] w-full rounded-[1.75rem] object-cover"
                />
                <div className="absolute inset-2 rounded-[1.75rem] bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="premium-panel rounded-3xl p-5">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16 border-2 border-white/20">
                        <AvatarImage src="/generic-avatar.svg" alt="Avatar del equipo PR Producciones" />
                        <AvatarFallback>PR</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-white/65">
                          <Users2 className="h-4 w-4 text-primary" />
                          Staff listo
                        </div>
                        <p className="mt-2 text-xl font-semibold leading-snug text-white">
                          Personal de confianza para protocolo, logística y seguridad.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="section-spacing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl space-y-4">
              <div className="text-emphasis">Perfiles disponibles</div>
              <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
                Listado organizado para cada necesidad de tu evento
              </h2>
              <p className="text-lg leading-relaxed text-foreground/70">
                Seleccionamos el equipo indicado según el tipo de activación, el formato del evento y el perfil de público que necesitas atender.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalPageContent.categories.map((category, index) => (
                <PersonalCategoryCard key={index} category={category} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PersonalPage;