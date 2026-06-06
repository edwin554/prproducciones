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
              <div className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 shadow-lg shadow-primary/30">
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
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-bold transition-all duration-200 active:scale-[0.98] shadow-xl shadow-primary/20">
                  <Link to="/contacto">
                  {homePageContent.hero.primaryCtaLabel}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-secondary px-10 py-7 text-lg font-bold transition-all duration-200 active:scale-[0.98]">
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
              <div className="bg-secondary/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-secondary/60 transition-colors">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">{homePageContent.highlights[0].title}</div>
              <div className="text-base text-white/80">{homePageContent.highlights[0].description}</div>
              </div>
              <div className="bg-secondary/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-secondary/60 transition-colors">
                <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">{homePageContent.highlights[1].title}</div>
              <div className="text-base text-white/80">{homePageContent.highlights[1].description}</div>
              </div>
              <div className="bg-secondary/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-secondary/60 transition-colors">
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">{homePageContent.highlights[2].title}</div>
              <div className="text-base text-white/80">{homePageContent.highlights[2].description}</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Pablo Section */}
        <section className="section-spacing bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <img src={homePageContent.about.image} alt={homePageContent.about.imageAlt} className="w-full h-[600px] object-cover rounded-3xl shadow-2xl" />
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
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg font-bold transition-all duration-200 active:scale-[0.98]">
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
        <section className="section-spacing bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
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
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-lg font-bold transition-all duration-200 active:scale-[0.98] shadow-xl">
                <Link to="/contacto">{homePageContent.cta.contactCtaLabel}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-7 text-lg font-bold transition-all duration-200 active:scale-[0.98]">
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