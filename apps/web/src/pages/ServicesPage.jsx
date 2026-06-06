import React from 'react';
import { Helmet } from 'react-helmet';
import { Mic, Volume2, Shield, Car, Users, Wrench, Music, Lightbulb, Sparkles, Calendar, Drumstick as Drum, Music as Guitar, Drumstick as Violin, Megaphone, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { pageSeo, servicesPageContent } from '@/data/pages';

const serviceIconMap = {
  mic: Mic,
  'volume-2': Volume2,
  shield: Shield,
  car: Car,
  users: Users,
  wrench: Wrench,
  music: Music,
  lightbulb: Lightbulb,
  sparkles: Sparkles,
  calendar: Calendar,
  drum: Drum,
  guitar: Guitar,
  violin: Violin,
  megaphone: Megaphone,
};

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>{pageSeo.services.title}</title>
        <meta name="description" content={pageSeo.services.description} />
        <link rel="canonical" href={pageSeo.services.canonicalUrl} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="dark dark-premium-section text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="text-emphasis mb-4">{servicesPageContent.heroEyebrow}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              {servicesPageContent.heroTitle}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              {servicesPageContent.heroDescription}
            </p>
          </div>
        </section>

        {/* Technical Equipment Highlight */}
        <section className="premium-surface py-12 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{servicesPageContent.equipmentTitle}</h2>
              <p className="text-white/80 mt-2">{servicesPageContent.equipmentDescription}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {servicesPageContent.equipment.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-white/10 px-6 py-3 rounded-xl border border-white/20">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  <span className="font-black tracking-wider text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-spacing bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesPageContent.services.map((service, index) => {
                const Icon = serviceIconMap[service.iconKey];

                return (
                  <div key={index} className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border group">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1" style={{ backgroundColor: `${service.color}15` }}>
                      <Icon className="w-7 h-7" style={{ color: service.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{service.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;