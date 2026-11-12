import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo.jsx';
import { notFoundPageContent, pageSeo } from '@/data/pages';
import { navigationLinks } from '@/data/site';

const NotFoundPage = () => (
  <>
    <Seo page={pageSeo.notFound} noindex />

    <main className="min-h-[70vh] bg-background flex items-center">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <div className="text-emphasis mb-4">{notFoundPageContent.eyebrow}</div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6">
          {notFoundPageContent.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-10">{notFoundPageContent.description}</p>

        <Button asChild className="premium-button border border-white/10 text-white">
          <Link to="/">{notFoundPageContent.homeLabel}</Link>
        </Button>

        <nav aria-label="Secciones del sitio" className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium">
          {navigationLinks
            .filter((link) => link.path !== '/')
            .map((link) => (
              <Link key={link.path} to={link.path} className="text-foreground hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
        </nav>
      </section>
    </main>
  </>
);

export default NotFoundPage;
