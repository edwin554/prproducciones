import React from 'react';
import { Helmet } from 'react-helmet';
import { Building2, Heart, Church, Layers, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import EventTypeCard from '@/components/EventTypeCard.jsx';
import { eventosPageContent, pageSeo } from '@/data/pages';

const eventCategoryIconMap = {
  'building-2': Building2,
  heart: Heart,
  church: Church,
};

const EventosPage = () => {
  return (
    <>
      <Helmet>
        <title>{pageSeo.eventos.title}</title>
        <meta name="description" content={pageSeo.eventos.description} />
        <link rel="canonical" href={pageSeo.eventos.canonicalUrl} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="dark dark-premium-section text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="text-emphasis mb-4">{eventosPageContent.heroEyebrow}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              {eventosPageContent.heroTitle}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              {eventosPageContent.heroDescription}
            </p>
          </div>
        </section>

        {/* Formats Section */}
        <section className="premium-surface py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Layers className="w-12 h-12 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
              {eventosPageContent.formatsTitle}
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-xl font-bold tracking-wide">
              <span>{eventosPageContent.formats[0]}</span>
              <span className="hidden md:block text-white/50">•</span>
              <span>{eventosPageContent.formats[1]}</span>
              <span className="hidden md:block text-white/50">•</span>
              <span>{eventosPageContent.formats[2]}</span>
            </div>
            <p className="mt-8 text-lg text-white/90 font-medium max-w-2xl mx-auto">
              {eventosPageContent.formatsDescription}
            </p>
          </div>
        </section>

        {/* Technical Equipment Highlight */}
        <section className="py-12 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground tracking-tight">{eventosPageContent.equipmentTitle}</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {eventosPageContent.equipment.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-white px-6 py-3 rounded-xl border border-border shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-black tracking-wider text-lg text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Categories Section */}
        <section className="section-spacing bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
                {eventosPageContent.categoriesTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eventosPageContent.eventCategories.map((category, index) => (
                <EventTypeCard
                  key={index}
                  title={category.title}
                  items={category.items}
                  icon={eventCategoryIconMap[category.iconKey]}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EventosPage;