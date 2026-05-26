import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PersonalCategoryCard from '@/components/PersonalCategoryCard.jsx';

const PersonalPage = () => {
  const categories = [
    'Personal logístico',
    'Vigilantes y escoltas',
    'Modelos de protocolo (A, AA, AAA)',
    'Encuestadores/volanteros/actores/figurantes/recreadores',
    'Bailarinas/payasos/mimos/malabaristas',
    'Comediantes/cuenteros/DJs/locutores',
    'Promotores/mercaderistas/embajadores',
    'Meseros/jaladores/músicos/managers/jefes de prensa/productores',
  ];

  return (
    <>
      <Helmet>
        <title>Personal - PR PRODUCCIONES</title>
        <meta name="description" content="Contamos con personal especializado en logística, seguridad, protocolo, entretenimiento. 24/7 Disponibles para tus eventos." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
              <Clock className="w-4 h-4" />
              <span>24/7 Disponibles</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Nuestro personal
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Profesionales altamente calificados en todas las áreas para garantizar el éxito de tu evento. Todo el personal de nuestra agencia está disponible y listo.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="section-spacing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
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