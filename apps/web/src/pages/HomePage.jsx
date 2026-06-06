import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PortfolioSection from '@/components/PortfolioSection.jsx';
import TestimonialsSection from '@/components/TestimonialsSection.jsx';
import { homePageContent, pageSeo } from '@/data/pages';
import { siteConfig } from '@/data/site';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>{pageSeo.home.title}</title>
        <meta name="description" content={pageSeo.home.description} />
        <link rel="canonical" href={pageSeo.home.canonicalUrl} />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img src={homePageContent.hero.backgroundImage} alt={homePageContent.hero.backgroundAlt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/80 to-primary/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,35,85,0.28),transparent_32%)] mix-blend-screen"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="flex flex-col items-center">
              <div className="premium-surface inline-flex items-center space-x-2 rounded-full border border-white/10 px-6 py-2 text-sm font-bold tracking-widest uppercase text-white mb-8 shadow-lg shadow-primary/30">
                <Clock className="w-4 h-4" />
              <span>{homePageContent.hero.badge}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight text-balance">
              {homePageContent.hero.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
              {homePageContent.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
               <Button asChild size="lg" className="premium-button border border-white/10 px-10 py-7 text-lg font-bold text-white shadow-xl shadow-primary/20 active:scale-[0.98]">
                  <Link to="/contacto">
                  {homePageContent.hero.primaryCtaLabel}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
               <Button asChild size="lg" variant="outline" className="premium-outline-button border-2 px-10 py-7 text-lg font-bold active:scale-[0.98]">
                <Link to="/servicios">{homePageContent.hero.secondaryCtaLabel}</Link>
                </Button>
              </div>
            </motion.div>

            {/* Stats / Highlights */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="premium-panel rounded-2xl p-8 hover:bg-white/10">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">{homePageContent.highlights[0].title}</div>
              <div className="text-base text-white/80">{homePageContent.highlights[0].description}</div>
              </div>
              <div className="premium-panel rounded-2xl p-8 hover:bg-white/10">
                <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">{homePageContent.highlights[1].title}</div>
              <div className="text-base text-white/80">{homePageContent.highlights[1].description}</div>
              </div>
              <div className="premium-panel rounded-2xl p-8 hover:bg-white/10">
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">{homePageContent.highlights[2].title}</div>
              <div className="text-base text-white/80">{homePageContent.highlights[2].description}</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Pablo Section */}
        <section className="section-spacing dark dark-premium-section">
          <div className="absolute left-[-8%] top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl opacity-80 mix-blend-screen pointer-events-none"></div>
          <div className="absolute right-[-6%] bottom-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl opacity-80 mix-blend-screen pointer-events-none"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
               <div className="relative">
                 <div className="absolute -left-10 top-12 h-48 w-48 rounded-full bg-primary/25 blur-3xl opacity-80 mix-blend-screen pointer-events-none"></div>
                 <img src={homePageContent.about.image} alt={homePageContent.about.imageAlt} className="relative w-full h-[600px] object-cover rounded-3xl border border-white/10 shadow-2xl shadow-black/40" />
               </div>
             </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="space-y-6">
                <div className="text-emphasis">{homePageContent.about.eyebrow}</div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tight">
                  {homePageContent.about.title}
                </h2>
                <p className="text-xl text-foreground/80 leading-relaxed font-medium">
                  {homePageContent.about.subtitle}
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {homePageContent.about.description}
                </p>
                <div className="pt-6">
                  <Button asChild size="lg" className="premium-button border border-white/10 px-8 py-6 text-lg font-bold text-white active:scale-[0.98]">
                    <Link to="/servicios">
                      {homePageContent.about.ctaLabel}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <section className="section-spacing premium-surface text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl opacity-70 mix-blend-screen pointer-events-none"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
              {homePageContent.cta.title}
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed font-medium">
              {homePageContent.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Button asChild size="lg" className="premium-button border border-white/10 px-10 py-7 text-lg font-bold text-white shadow-xl active:scale-[0.98]">
                <Link to="/contacto">{homePageContent.cta.contactCtaLabel}</Link>
                </Button>
               <Button asChild size="lg" variant="outline" className="premium-outline-button border-2 px-10 py-7 text-lg font-bold active:scale-[0.98]">
                <a href={siteConfig.phone.href}>{homePageContent.cta.callCtaLabel}</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;