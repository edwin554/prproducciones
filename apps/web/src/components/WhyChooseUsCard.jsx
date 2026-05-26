import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUsCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group bg-card overflow-hidden relative">
        {/* Subtle top border accent on hover */}
        <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
        
        <CardContent className="p-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:-translate-y-1 transition-all duration-300">
            <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WhyChooseUsCard;