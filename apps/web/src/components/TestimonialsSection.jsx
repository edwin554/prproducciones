import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard.jsx';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Juan Carlos Martínez',
      company: 'Gerente Marketing, Empresa XYZ',
      text: 'PR Producciones superó nuestras expectativas en el lanzamiento de nuestro producto. El equipo fue profesional, puntual y entregó exactamente lo que necesitábamos. Definitivamente volveremos a trabajar con ellos.',
      rating: 5,
      eventType: 'Lanzamiento de marca',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'María González',
      company: 'Novia',
      text: 'Nuestro matrimonio fue perfecto gracias a PR Producciones. Desde la coordinación hasta la ejecución, todo fue impecable. El sonido, las luces, la animación... ¡todo estuvo de 10!',
      rating: 5,
      eventType: 'Boda',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Carlos Rodríguez',
      company: 'Dueño Negocio, Tienda Retail',
      text: 'Activamos nuestra marca con PR Producciones y los resultados fueron inmediatos. Aumentamos nuestro flujo de clientes significativamente. Son profesionales que entienden el negocio.',
      rating: 5,
      eventType: 'Activación BTL',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Ana Pérez',
      company: 'Coordinadora Eventos, Empresa Corporativa',
      text: 'Trabajar con PR Producciones fue una experiencia excelente. Su disponibilidad 24/7 y flexibilidad nos permitió hacer cambios de último minuto sin problemas. Altamente recomendados.',
      rating: 5,
      eventType: 'Evento Corporativo',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Roberto Sánchez',
      company: 'Productor Musical',
      text: 'Para nuestro concierto necesitábamos un equipo técnico de calidad y PR Producciones entregó exactamente eso. Sonido impecable, luces profesionales y un equipo que sabe lo que hace.',
      rating: 5,
      eventType: 'Concierto/Evento Musical',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Sofía López',
      company: 'Directora RRHH, Empresa Grande',
      text: 'Nuestro evento de integración fue un éxito total. PR Producciones manejó todo con profesionalismo y creatividad. El equipo fue puntual, pulcro y con excelente presentación personal.',
      rating: 5,
      eventType: 'Evento de Integración',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-emphasis mb-4">Testimonios</div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Opiniones de empresas y personas que han confiado en nosotros para hacer realidad sus eventos.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              index={index}
              name={testimonial.name}
              company={testimonial.company}
              text={testimonial.text}
              rating={testimonial.rating}
              eventType={testimonial.eventType}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;