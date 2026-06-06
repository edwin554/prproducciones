import React from 'react';
import { Briefcase, MapPin, Clock, Users, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import WhyChooseUsCard from './WhyChooseUsCard.jsx';
import { whyChooseUsSectionContent } from '@/data/sections';

const reasonIconMap = {
  briefcase: Briefcase,
  'map-pin': MapPin,
  clock: Clock,
  users: Users,
  shield: Shield,
  zap: Zap,
};

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight text-balance">
              {whyChooseUsSectionContent.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {whyChooseUsSectionContent.description}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whyChooseUsSectionContent.reasons.map((reason, index) => {
            const Icon = reasonIconMap[reason.iconKey];

            return <WhyChooseUsCard key={index} icon={Icon} title={reason.title} description={reason.description} index={index} />;
          })}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg transition-all duration-200 active:scale-[0.98] shadow-lg shadow-primary/20">
            <Link to="/contacto">
              {whyChooseUsSectionContent.ctaLabel}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;