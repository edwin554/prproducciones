import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

const PersonalCategoryCard = ({ category, index }) => {
  const itemNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full border-border/60 bg-card/95 shadow-sm hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
        <CardContent className="flex h-full flex-col gap-5 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="rounded-2xl bg-primary/10 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/80">
                Perfil
              </span>
            </div>
            <span className="text-sm font-bold text-muted-foreground">{itemNumber}</span>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold leading-snug text-foreground">{category}</h3>
          </div>

          <div className="h-1 w-16 rounded-full bg-primary/70" />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PersonalCategoryCard;