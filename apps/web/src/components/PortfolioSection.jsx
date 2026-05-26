import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import PortfolioCard from './PortfolioCard.jsx';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1498885145901-683e0e55d721',
      type: 'Evento Corporativo',
      location: 'Convención Anual',
      year: '2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1600547224355-10c6482872ca',
      type: 'Boda',
      location: 'Matrimonio Campestre',
      year: '2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1688507971018-ba7c2e5bcf13',
      type: 'Concierto',
      location: 'Festival Musical',
      year: '2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1684557543785-4ed484704c71',
      type: 'Activación BTL',
      location: 'Lanzamiento de Marca',
      year: '2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1702389159527-39270023a337',
      type: 'Conferencia',
      location: 'Cumbre Empresarial',
      year: '2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1543740077-8c510059690d',
      type: 'Fiesta',
      location: 'Celebración Privada',
      year: '2023'
    },
    {
      image: 'https://images.unsplash.com/photo-1436943783329-460b1e10742a',
      type: 'Gran Formato',
      location: 'Evento Masivo',
      year: '2023'
    },
    {
      image: 'https://images.unsplash.com/photo-1432684399697-2fbe7db87538',
      type: 'Pequeño Formato',
      location: 'Reunión Exclusiva',
      year: '2023'
    }
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-emphasis mb-4">Galería</div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
              Nuestros Trabajos
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Eventos realizados con éxito en todo el territorio nacional. Cada proyecto es una muestra de nuestro compromiso y calidad.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              index={index}
              image={item.image}
              type={item.type}
              location={item.location}
              year={item.year}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold transition-all duration-200 active:scale-[0.98] shadow-lg">
            <Link to="/eventos">
              Ver más trabajos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;