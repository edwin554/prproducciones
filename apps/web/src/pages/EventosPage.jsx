import React from 'react';
import { Helmet } from 'react-helmet';
import { Building2, Heart, Church, Layers, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import EventTypeCard from '@/components/EventTypeCard.jsx';

const EventosPage = () => {
  const eventCategories = [
    {
      title: 'EMPRESARIALES',
      icon: Building2,
      items: [
        'Eventos empresariales',
        'Inauguraciones',
        'Lanzamientos de marca',
        'Bazares',
        'Fiestas patronales y de pueblos',
      ],
    },
    {
      title: 'SOCIALES',
      icon: Heart,
      items: [
        'Bodas',
        'Quince años',
        'Primeras comuniones',
        'Bautismos',
        'Baby shower',
        'Cumpleaños',
        'Grados',
        'Despedidas de empresas',
      ],
    },
    {
      title: 'RELIGIOSOS Y PROTOCOLO',
      icon: Church,
      items: [
        'Congresos',
        'Asambleas',
        'Eventos de colegios',
        'Eventos de protocolo',
        'Eventos políticos',
        'Misas e iglesias',
      ],
    },
  ];

  const equipment = [
    'TARIMA',
    'SONIDO',
    'LUCES',
    'BACKLINE'
  ];

  return (
    <>
      <Helmet>
        <title>Eventos - PR PRODUCCIONES</title>
        <meta name="description" content="Organizamos eventos empresariales, sociales y religiosos. Formatos grandes, medianos y pequeños. Incluimos tarima, sonido, luces y backline." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="text-emphasis mb-4">Producción Total</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Tipos de Eventos
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Cualquier dimensión es posible con nosotros. Nos adaptamos a la magnitud de tu visión.
            </p>
          </div>
        </section>

        {/* Formats Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Layers className="w-12 h-12 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
              Formatos de Eventos
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-xl font-bold tracking-wide">
              <span>GRAN FORMATO</span>
              <span className="hidden md:block text-white/50">•</span>
              <span>MEDIANO FORMATO</span>
              <span className="hidden md:block text-white/50">•</span>
              <span>PEQUEÑO FORMATO</span>
            </div>
            <p className="mt-8 text-lg text-white/90 font-medium max-w-2xl mx-auto">
              Cualquier dimensión es posible con nosotros. Contamos con la infraestructura para hacer realidad tu evento sin importar su tamaño.
            </p>
          </div>
        </section>

        {/* Technical Equipment Highlight */}
        <section className="py-12 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Equipamiento Técnico Disponible</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {equipment.map((item, idx) => (
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
                Categorías de Eventos
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eventCategories.map((category, index) => (
                <EventTypeCard
                  key={index}
                  title={category.title}
                  items={category.items}
                  icon={category.icon}
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