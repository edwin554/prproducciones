import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard.jsx';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { testimonialsSectionContent } from '@/data/sections';

const TestimonialsSection = () => {
  return (
    <section className="section-spacing dark dark-premium-section">
      <div className="absolute right-[-6%] top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl opacity-70 mix-blend-screen pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-emphasis mb-4">{testimonialsSectionContent.eyebrow}</div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
              {testimonialsSectionContent.title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              {testimonialsSectionContent.description}
            </p>
          </motion.div>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto w-full max-w-6xl px-12"
        >
          <CarouselContent className="-ml-6">
            {testimonialsSectionContent.testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <TestimonialCard
                  index={index}
                  name={testimonial.name}
                  company={testimonial.company}
                  text={testimonial.text}
                  rating={testimonial.rating}
                  eventType={testimonial.eventType}
                  avatar={testimonial.avatar}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="premium-outline-button left-0 h-11 w-11 border border-white/10 bg-white/5 text-white hover:bg-white/10 disabled:opacity-30" />
          <CarouselNext className="premium-outline-button right-0 h-11 w-11 border border-white/10 bg-white/5 text-white hover:bg-white/10 disabled:opacity-30" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;