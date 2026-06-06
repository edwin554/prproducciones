import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard.jsx';
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsSectionContent.testimonials.map((testimonial, index) => (
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