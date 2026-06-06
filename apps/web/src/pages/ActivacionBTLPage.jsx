import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { activacionBtlPageContent, pageSeo } from '@/data/pages';

const ActivacionBTLPage = () => {
  return (
    <>
      <Helmet>
        <title>{pageSeo.activacionBtl.title}</title>
        <meta name="description" content={pageSeo.activacionBtl.description} />
        <link rel="canonical" href={pageSeo.activacionBtl.canonicalUrl} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[80dvh] flex items-center justify-center overflow-hidden bg-secondary">
          <div className="absolute inset-0 z-0">
            <img
              src={activacionBtlPageContent.hero.backgroundImage}
              alt={activacionBtlPageContent.hero.backgroundAlt}
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
                {activacionBtlPageContent.hero.eyebrow}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tighter">
                {activacionBtlPageContent.hero.title} <br/><span className="text-primary">{activacionBtlPageContent.hero.highlight}</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium">
                {activacionBtlPageContent.hero.description}
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
                  {activacionBtlPageContent.valueProposition.title}
                </h2>
                <p className="text-xl text-white/90 font-medium leading-relaxed">
                  {activacionBtlPageContent.valueProposition.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <Target className="w-10 h-10 mb-4 text-white" />
                  <h3 className="text-xl font-bold mb-2">{activacionBtlPageContent.valueProposition.cards[0].title}</h3>
                  <p className="text-white/80">{activacionBtlPageContent.valueProposition.cards[0].description}</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <TrendingUp className="w-10 h-10 mb-4 text-white" />
                  <h3 className="text-xl font-bold mb-2">{activacionBtlPageContent.valueProposition.cards[1].title}</h3>
                  <p className="text-white/80">{activacionBtlPageContent.valueProposition.cards[1].description}</p>
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
                {activacionBtlPageContent.reasonsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activacionBtlPageContent.reasons.map((point, index) => (
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
                {activacionBtlPageContent.cta.title}
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                {activacionBtlPageContent.cta.description}
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-bold transition-all duration-200 active:scale-[0.98] shadow-xl shadow-primary/20">
                <Link to="/contacto">
                  {activacionBtlPageContent.cta.label}
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