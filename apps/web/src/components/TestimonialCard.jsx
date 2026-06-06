import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, company, text, rating, eventType, avatar, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="premium-panel p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative group overflow-hidden"
    >
      <div className="absolute -left-10 top-6 h-28 w-28 rounded-full bg-primary/20 blur-3xl opacity-70 mix-blend-screen pointer-events-none"></div>
      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />
      
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? 'fill-primary text-primary' : 'fill-white/10 text-white/25'}`}
            />
          ))}
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white/75">
          {rating}/5 estrellas
        </div>
      </div>
      
      <p className="text-foreground/80 text-lg leading-relaxed mb-8 flex-grow font-medium italic">
        "{text}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 bg-white/10"
        />
        <div>
          <div className="font-bold text-foreground text-lg">{name}</div>
          <div className="text-sm text-muted-foreground font-medium">
            {company} <span className="mx-1 text-primary">•</span> {eventType}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;