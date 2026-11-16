import React from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import PortfolioCard from './PortfolioCard.jsx';
import { portfolioSectionContent } from '@/data/sections';
import { buildWhatsAppLink } from '@/data/site';
import { trackEvent } from '@/lib/analytics';

const PortfolioSection = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <m.div
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
          </m.div>
        </div>

        {portfolioSectionContent.videos.map((video) => (
          <m.div
            key={video.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="dark dark-premium-section mb-16 grid items-center gap-8 rounded-3xl p-6 text-white shadow-2xl shadow-black/20 sm:p-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-12"
          >
            {/* Video vertical: no se descarga hasta que el visitante pulsa reproducir. */}
            <video
              className="mx-auto aspect-[466/848] w-full max-w-[320px] rounded-2xl border border-white/10 bg-black object-cover shadow-xl"
              src={video.src}
              poster={video.poster}
              controls
              playsInline
              preload="none"
              aria-label={video.title}
              onPlay={() => trackEvent('video_play', { video_title: video.title })}
            />
            <div className="text-center md:text-left">
              <div className="text-emphasis mb-4">{video.eyebrow}</div>
              <h3 className="mb-4 text-3xl font-black tracking-tight md:text-4xl">{video.title}</h3>
              <p className="mb-6 text-lg leading-relaxed text-white/80">{video.description}</p>
              <ul className="mb-8 flex flex-wrap justify-center gap-2 md:justify-start">
                {video.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/90">
                    {tag}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="premium-button border border-white/10 px-8 py-6 text-lg font-bold">
                <a href={buildWhatsAppLink(video.quoteMessage)} target="_blank" rel="noopener noreferrer" data-track-location="video_trabajos">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {portfolioSectionContent.videoCtaLabel}
                </a>
              </Button>
            </div>
          </m.div>
        ))}

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
          <Button asChild size="lg" className="premium-button border border-white/10 px-8 py-6 text-lg font-bold shadow-lg active:scale-[0.98]">
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