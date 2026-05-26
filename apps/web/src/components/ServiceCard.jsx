import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, icon: Icon, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4" style={{ borderLeftColor: color }}>
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl" style={{ backgroundColor: `${color}15` }}>
              <Icon className="w-6 h-6" style={{ color }} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground leading-snug">{service}</h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;