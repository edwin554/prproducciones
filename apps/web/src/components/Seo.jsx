import { createContext, useContext, useEffect } from 'react';
import { seoDefaults, siteConfig } from '@/data/site';
import { trackPageView } from '@/lib/analytics';

// Etiquetas <head> de cada página: título, descripción, canonical y vista previa
// para redes sociales (Open Graph / Twitter).
// - En el pre-renderizado (servidor) se recogen en SeoContext y se escriben en el HTML.
// - En el navegador se actualizan al cambiar de página.

export const SeoContext = createContext(null);

export function buildSeoTags(page, noindex = false) {
  const { title, description, canonicalUrl } = page;
  const image = page.image ?? seoDefaults.image;
  const tags = [
    { tag: 'meta', key: 'name', name: 'description', content: description },
    noindex
      ? { tag: 'meta', key: 'name', name: 'robots', content: 'noindex, follow' }
      : { tag: 'link', key: 'rel', rel: 'canonical', href: canonicalUrl },
    { tag: 'meta', key: 'property', property: 'og:type', content: 'website' },
    { tag: 'meta', key: 'property', property: 'og:site_name', content: siteConfig.brand.name },
    { tag: 'meta', key: 'property', property: 'og:locale', content: 'es_CO' },
    { tag: 'meta', key: 'property', property: 'og:title', content: title },
    { tag: 'meta', key: 'property', property: 'og:description', content: description },
    !noindex && { tag: 'meta', key: 'property', property: 'og:url', content: canonicalUrl },
    { tag: 'meta', key: 'property', property: 'og:image', content: image },
    { tag: 'meta', key: 'name', name: 'twitter:card', content: 'summary_large_image' },
    { tag: 'meta', key: 'name', name: 'twitter:title', content: title },
    { tag: 'meta', key: 'name', name: 'twitter:description', content: description },
    { tag: 'meta', key: 'name', name: 'twitter:image', content: image },
  ].filter(Boolean);
  return { title, tags };
}

const escapeHtml = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// HTML del <head> para el pre-renderizado.
export function seoToHtml({ title, tags }) {
  const lines = [`<title>${escapeHtml(title)}</title>`];
  for (const { tag, key, ...attrs } of tags) {
    const attributes = Object.entries(attrs)
      .map(([name, value]) => `${name}="${escapeHtml(value)}"`)
      .join(' ');
    lines.push(`<${tag} data-seo ${attributes} />`);
  }
  return lines.join('\n\t\t');
}

// Sustituye en el documento las etiquetas de la página anterior por las de la actual.
function applySeo({ title, tags }) {
  document.title = title;
  document.head.querySelectorAll('[data-seo]').forEach((element) => element.remove());
  for (const { tag, key, ...attrs } of tags) {
    const element = document.createElement(tag);
    element.setAttribute('data-seo', '');
    Object.entries(attrs).forEach(([name, value]) => element.setAttribute(name, value));
    document.head.appendChild(element);
  }
}

const Seo = ({ page, noindex = false }) => {
  const collector = useContext(SeoContext);
  const seo = buildSeoTags(page, noindex);

  if (collector) {
    // Servidor: guardar para escribirlo en el HTML pre-renderizado.
    collector.seo = seo;
  }

  useEffect(() => {
    applySeo(seo);
    // Vista de página para la analítica (solo si el visitante la aceptó).
    trackPageView();
    // seo se deriva de page/noindex; basta con depender de ellos.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, noindex]);

  return null;
};

export default Seo;
