const siteBaseUrl = (import.meta.env.VITE_SITE_URL ?? 'https://prproduccionesbtl.com').replace(/\/$/, '');

export const getCanonicalUrl = (path = '/') => {
  if (path === '/') {
    return `${siteBaseUrl}/`;
  }

  return `${siteBaseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

// Google Analytics 4. Vacío = analítica desactivada (no se muestra el aviso de cookies).
export const analyticsConfig = {
  ga4MeasurementId: 'G-VJ21M5BZ4D',
};

export const cookieConsentContent = {
  title: 'Cookies de medición',
  description: 'Usamos Google Analytics para saber cuántas personas visitan la web y qué páginas les interesan. Solo se activa si lo aceptas, y puedes cambiar tu elección cuando quieras desde el pie de página.',
  acceptLabel: 'Aceptar',
  rejectLabel: 'Rechazar',
  preferencesLabel: 'Preferencias de cookies',
};

// Imagen por defecto para la vista previa al compartir en redes (1200x630).
export const seoDefaults = {
  image: 'https://images.unsplash.com/photo-1629276301226-63a884a68e4f?auto=format&fit=crop&w=1200&h=630&q=80',
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
    whatsappMessage: 'Hola, vi su página web y quiero cotizar un evento.',
    placeholder: '+57 311 731 8419',
  },
  secondaryPhone: {
    display: '+57 304 529 8633',
    href: 'tel:+573045298633',
  },
  email: {
    display: 'pabloemiliorozo85@gmail.com',
    href: 'mailto:pabloemiliorozo85@gmail.com',
  },
  secondaryEmail: {
    display: 'mexpress185@gmail.com',
    href: 'mailto:mexpress185@gmail.com',
  },
  coverage: 'Bogotá, Medellín, Cali, Barranquilla y los 32 departamentos de Colombia',
  footer: {
    description: 'Coordinamos toda la logística, activación comercial y manejo de seguridad de tus eventos en Bogotá, Medellín, Cali, Barranquilla, Bucaramanga, Cartagena y en los 32 departamentos de Colombia.',
    workdayLabel: 'Trabajamos las 24 horas',
    tagline: 'AQUELLO QUE NO PUEDES DECIR, LO DECIMOS POR TI',
    closingText: 'Comunicamos de manera eficiente la esencia de tu negocio. Somos el aliado estratégico que tu marca necesita para destacar. ¡Contáctanos hoy y cotiza tu próximo gran evento!'
  },
};

// Enlace de WhatsApp con un mensaje ya escrito (la gente escribe más si no empieza en blanco).
export const buildWhatsAppLink = (text = siteConfig.phone.whatsappMessage) =>
  `${siteConfig.phone.whatsappHref}?text=${encodeURIComponent(text)}`;

// Todos los teléfonos de contacto, el principal primero.
export const contactPhones = [siteConfig.phone, siteConfig.secondaryPhone];

// Todos los correos de contacto, el principal primero.
export const contactEmails = [siteConfig.email, siteConfig.secondaryEmail];

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
