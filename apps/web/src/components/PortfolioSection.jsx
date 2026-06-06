import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import PortfolioCard from './PortfolioCard.jsx';
import { portfolioSectionContent } from '@/data/sections';

const PortfolioSection = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-emphasis mb-4">{portfolioSectionContent.eyebrow}</div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
              {portfolioSectionContent.title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              {portfolioSectionContent.description}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {portfolioSectionContent.items.map((item, index) => (
            <PortfolioCard
              key={index}
              index={index}
              image={item.image}
              type={item.type}
              location={item.location}
              year={item.year}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="premium-button border border-white/10 px-8 py-6 text-lg font-bold text-white shadow-lg active:scale-[0.98]">
            <Link to="/eventos">
              {portfolioSectionContent.ctaLabel}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;