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
      className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl transition-all duration-300 flex flex-col h-full relative group"
    >
      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />
      
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground'}`}
          />
        ))}
      </div>
      
      <p className="text-foreground/80 text-lg leading-relaxed mb-8 flex-grow font-medium italic">
        "{text}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
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