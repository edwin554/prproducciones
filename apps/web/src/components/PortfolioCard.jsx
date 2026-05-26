import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

const PortfolioCard = ({ image, type, location, year, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={`${type} en ${location}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 shadow-sm">
          {type}
        </div>
        <h3 className="text-2xl font-bold mb-2 leading-tight">{location}</h3>
        <div className="flex items-center space-x-4 text-white/80 text-sm font-medium">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            Colombia
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {year}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;