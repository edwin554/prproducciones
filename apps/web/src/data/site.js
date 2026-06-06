const siteBaseUrl = (import.meta.env.VITE_SITE_URL ?? 'https://prproducciones.com').replace(/\/$/, '');

export const getCanonicalUrl = (path = '/') => {
  if (path === '/') {
    return `${siteBaseUrl}/`;
  }

  return `${siteBaseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export const siteConfig = {
  brand: {
    monogram: 'PR',
    name: 'PR Producciones',
    displayName: 'PR PRODUCCIONES',
  },
  availabilityLabel: '24/7 Disponibles',
  phone: {
    display: '+57 311 731 8419',
    href: 'tel:+573117318419',
    whatsappHref: 'https://wa.me/573117318419',
    placeholder: '+57 311 731 8419',
  },
  email: {
    display: 'pabloemiliorozo85@gmail.com',
    href: 'mailto:pabloemiliorozo85@gmail.com',
  },
  coverage: 'Todo el territorio nacional',
  footer: {
    description: 'Coordinamos toda la logística, activación comercial y manejo de seguridad de tus eventos en todo el territorio colombiano.',
    workdayLabel: 'Trabajamos las 24 horas',
    tagline: 'AQUELLO QUE NO PUEDES DECIR, LO DECIMOS POR TI',
    closingText: 'Comunicamos de manera eficiente todo lo relacionado con tu negocio. No te dejes confundir, es la mejor opción si quieres activar. Llama, cotiza, pregunta, no te quedes quieto.',
  },
};

export const navigationLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Personal', path: '/personal' },
  { name: 'Activación BTL', path: '/activacion-btl' },
  { name: 'Eventos', path: '/eventos' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Contacto', path: '/contacto' },
];

export const footerQuickLinks = navigationLinks.filter((link) => link.path !== '/' && link.path !== '/contacto');

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/PabloRozo', iconKey: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com/PabloRozo', iconKey: 'instagram' },
  { label: 'TikTok', href: 'https://tiktok.com/@PabloRozo', iconKey: 'tiktok' },
  { label: 'Kwai', href: 'https://kwai.com/@PabloRozo', iconKey: 'kwai' },
];
