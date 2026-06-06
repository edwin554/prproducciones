import { getCanonicalUrl, siteConfig } from '@/data/site';
import { technicalEquipment } from '@/data/sections';

export const pageSeo = {
  home: {
    title: 'PR Producciones | Producción de Eventos y Activación BTL en Colombia',
    description: 'Agencia de producción de eventos y activación de marca BTL en Colombia. Logística integral, seguridad para eventos, alquiler de sonido, luces y shows. Disponible 24/7.',
    canonicalUrl: getCanonicalUrl('/'),
  },
  services: {
    title: 'Servicios de Producción y Logística de Eventos | PR Producciones',
    description: 'Alquiler de sonido y luces, pirotecnia, perifoneo, tarimas, agrupaciones musicales en vivo y personal de seguridad para eventos corporativos y sociales en Colombia.',
    canonicalUrl: getCanonicalUrl('/servicios'),
  },
  personal: {
    title: 'Personal de Protocolo, Logística y Seguridad | PR Producciones',
    description: 'Contratación de personal calificado para eventos: modelos de protocolo (A, AA, AAA), personal logístico, vigilantes privados, recreadores, DJs y meseros en Colombia.',
    canonicalUrl: getCanonicalUrl('/personal'),
  },
  activacionBtl: {
    title: 'Activación de Marca y BTL en Colombia | PR Producciones',
    description: 'Potencia tus ventas y flujo de caja con nuestras estrategias de activación comercial BTL. Personal calificado, volanteros, zanqueros y carros valla.',
    canonicalUrl: getCanonicalUrl('/activacion-btl'),
  },
  eventos: {
    title: 'Organización de Eventos Sociales y Empresariales | PR Producciones',
    description: 'Productora de eventos de gran y pequeño formato en Colombia: corporativos, bodas, fiestas patronales y congresos. Equipamiento técnico completo.',
    canonicalUrl: getCanonicalUrl('/eventos'),
  },
  nosotros: {
    title: 'Nosotros | PR Producciones - Productora de Eventos en Colombia',
    description: 'Conoce la trayectoria de PR Producciones. Líderes en logística integral, producción técnica de eventos y seguridad para activaciones comerciales en todo el país.',
    canonicalUrl: getCanonicalUrl('/nosotros'),
  },
  contacto: {
    title: 'Contacto | Cotiza tu Evento en Colombia | PR Producciones',
    description: 'Ponte en contacto con PR Producciones para cotizar la logística, BTL o producción técnica de tu evento en Colombia. Disponible 24/7. ¡Llámanos!',
    canonicalUrl: getCanonicalUrl('/contacto'),
  },
};

export const homePageContent = {
  hero: {
    badge: siteConfig.availabilityLabel,
    title: 'CREAMOS EXPERIENCIAS QUE TU MARCA NUNCA OLVIDARÁ',
    description: 'Eventos corporativos, conciertos y activaciones BTL en toda Colombia',
    metrics: ['+500 eventos producidos', '10 años de experiencia', 'Cobertura 32 departamentos'],
    primaryCtaLabel: 'Cotizar mi evento',
    secondaryCtaLabel: 'Ver portafolio',
    backgroundImage: 'https://images.unsplash.com/photo-1629276301226-63a884a68e4f',
    backgroundAlt: 'Producción profesional de eventos',
  },
  highlights: [
    {
      title: 'Cobertura Nacional',
      description: 'Llegamos a cualquier rincón de Colombia con la misma calidad.',
    },
    {
      title: 'Soporte 24/7',
      description: 'Tu marca no descansa, nosotros tampoco. Siempre listos.',
    },
    {
      title: 'Equipo Disponible',
      description: 'Personal altamente capacitado listo para ejecutar tu visión.',
    },
  ],
  about: {
    eyebrow: 'Experiencia y Compromiso',
    title: 'PR Producciones',
    subtitle: 'Productora y agencia de eventos de alto impacto con cobertura a nivel nacional.',
    description: 'Nos especializamos en la planificación, logística integral y producción técnica de eventos corporativos, comerciales y artísticos. Con un equipo calificado y disponibilidad 24/7, garantizamos la ejecución perfecta de tu proyecto, asegurando que tu marca se destaque y conecte de manera real con el público en cualquier lugar del país.',
    ctaLabel: 'Explorar nuestros servicios',
    image: 'https://horizons-cdn.hostinger.com/943339c9-a025-4dc8-80b9-9abf4b4de65f/e9f5269a10e3012c718edb10f6179249.png',
    imageAlt: 'Equipo profesional de PR Producciones - Producción de eventos',
  },
  cta: {
    title: '¿LISTO PARA CREAR ALGO INCREÍBLE?',
    description: 'Cuéntanos sobre tu evento y te enviamos una propuesta en 24 horas',
    contactCtaLabel: 'Contáctanos ahora',
    callCtaLabel: 'Llamar ahora',
  },
};

export const servicesPageContent = {
  heroEyebrow: 'Soluciones Integrales',
  heroTitle: 'Nuestros servicios',
  heroDescription: 'Cualquier elemento técnico necesario para lograr el plan de trabajo está a tu disposición.',
  equipmentTitle: 'Equipamiento Técnico Incluido',
  equipmentDescription: 'Todos los elementos técnicos necesarios para tu evento',
  equipment: technicalEquipment,
  services: [
    { name: 'Animación y locución', description: 'Voces profesionales para dar vida y energía a tu marca o evento.', iconKey: 'mic', color: '#DC143C' },
    { name: 'Megáfono y perifoneo (carro y moto)', description: 'Alcance masivo en movimiento para comunicar tus mensajes clave.', iconKey: 'volume-2', color: '#FF6B6B' },
    { name: 'Seguridad y vigilancia privada', description: 'Personal capacitado para garantizar el orden y la tranquilidad.', iconKey: 'shield', color: '#4ECDC4' },
    { name: 'Carro valla y moto valla', description: 'Publicidad móvil de alto impacto visual en rutas estratégicas.', iconKey: 'car', color: '#45B7D1' },
    { name: 'Volanteo/popman/zanqueros', description: 'Interacción directa y llamativa con tu público objetivo.', iconKey: 'users', color: '#FFA07A' },
    { name: 'Logística y seguridad privada', description: 'Coordinación integral para que todo fluya sin contratiempos.', iconKey: 'wrench', color: '#98D8C8' },
    { name: 'Alquiler de sonido y backline', description: 'Equipos de última generación para una acústica perfecta.', iconKey: 'music', color: '#DC143C' },
    { name: 'Luminotecnia', description: 'Diseño de iluminación para crear atmósferas inolvidables.', iconKey: 'lightbulb', color: '#F7DC6F' },
    { name: 'Pirotecnia controlada', description: 'Efectos especiales seguros para momentos cumbre.', iconKey: 'sparkles', color: '#FF6B6B' },
    { name: 'Producción de eventos en general', description: 'Gestión completa desde la idea hasta la ejecución final.', iconKey: 'calendar', color: '#4ECDC4' },
    { name: 'Batucadas y papayera', description: 'Ritmo y alegría tradicional para encender cualquier celebración.', iconKey: 'drum', color: '#45B7D1' },
    { name: 'Eventos con agrupaciones en vivo', description: 'Música en directo con los mejores talentos locales y nacionales.', iconKey: 'guitar', color: '#FFA07A' },
    { name: 'Parranda vallenata/tipibajo/mariachis/música popular/carranga/rock/música andina/tambores/música colombiana', description: 'Diversidad musical para todos los gustos y ocasiones.', iconKey: 'violin', color: '#98D8C8' },
    { name: 'Trío de cuerda y serenata', description: 'Detalles musicales íntimos y elegantes.', iconKey: 'megaphone', color: '#DC143C' },
  ],
};

export const personalPageContent = {
  badge: siteConfig.availabilityLabel,
  title: 'Nuestro personal',
  description: 'Profesionales altamente calificados en todas las áreas para garantizar el éxito de tu evento. Todo el personal de nuestra agencia está disponible y listo.',
  summaryItems: [
    'Cobertura nacional para eventos corporativos, sociales y activaciones BTL.',
    'Equipo disponible 24/7 con excelente presentación y actitud de servicio.',
    'Perfiles seleccionados para logística, protocolo, seguridad y atención al público.',
  ],
  image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
  imageAlt: 'Equipo de protocolo y logística para eventos',
  categories: [
    'Personal logístico',
    'Vigilantes privados',
    'Escoltas',
    'Modelos de protocolo A',
    'Modelos de protocolo AA',
    'Modelos de protocolo AAA',
    'Encuestadores',
    'Volanteros',
    'Actores y figurantes',
    'Recreadores',
    'Bailarinas',
    'Payasos y mimos',
    'Malabaristas',
    'Comediantes y cuenteros',
    'DJs y locutores',
    'Promotores y mercaderistas',
    'Embajadores de marca',
    'Meseros y jaladores',
    'Músicos',
    'Managers',
    'Jefes de prensa',
    'Productores',
  ],
};

export const activacionBtlPageContent = {
  hero: {
    eyebrow: 'Estrategia Directa',
    title: 'NO PIERDAS MAS DINERO',
    highlight: 'ACTIVA CON NOSOTROS',
    description: 'Todas las estrategias BTL, por más descabelladas que sean, las hacemos posibles.',
    backgroundImage: 'https://images.unsplash.com/photo-1609869510749-19872196be1e',
    backgroundAlt: 'Activación BTL profesional',
  },
  valueProposition: {
    title: 'Impactamos con estrategia tu espacio comercial',
    description: 'Para que tu flujo de caja sea contundente. Aumentar tus ventas y crear la mejor impresión es nuestro objetivo principal.',
    cards: [
      {
        title: 'Estrategia',
        description: 'Acciones dirigidas al público correcto.',
      },
      {
        title: 'Resultados',
        description: 'Aumento directo en flujo de caja.',
      },
    ],
  },
  reasonsTitle: 'Por qué elegirnos para tu BTL',
  reasons: [
    {
      title: 'Presentación Impecable',
      description: 'Puntualidad, pulcritud y excelente presentación personal de todo nuestro equipo en el punto de activación.',
    },
    {
      title: 'Personal Calificado',
      description: 'Equipo que se preocupa por entender la necesidad específica de tu espacio comercial para conectar con tu audiencia.',
    },
    {
      title: 'Valor Agregado',
      description: 'Entregamos el valor agregado que busca una gran empresa, mediana o negocio emergente para destacar.',
    },
  ],
  cta: {
    title: 'Impulsa tu marca con nosotros',
    description: 'Contáctanos hoy y descubre cómo podemos activar tu marca de manera efectiva, creativa y profesional. 24/7 Disponibles.',
    label: 'Solicitar cotización',
  },
};

export const eventosPageContent = {
  heroEyebrow: 'Producción Total',
  heroTitle: 'Tipos de Eventos',
  heroDescription: 'Cualquier dimensión es posible con nosotros. Nos adaptamos a la magnitud de tu visión.',
  formatsTitle: 'Formatos de Eventos',
  formats: ['GRAN FORMATO', 'MEDIANO FORMATO', 'PEQUEÑO FORMATO'],
  formatsDescription: 'Cualquier dimensión es posible con nosotros. Contamos con la infraestructura para hacer realidad tu evento sin importar su tamaño.',
  equipmentTitle: 'Equipamiento Técnico Disponible',
  equipment: technicalEquipment,
  categoriesTitle: 'Categorías de Eventos',
  eventCategories: [
    {
      title: 'EMPRESARIALES',
      iconKey: 'building-2',
      items: [
        'Eventos empresariales',
        'Inauguraciones',
        'Lanzamientos de marca',
        'Bazares',
        'Fiestas patronales y de pueblos',
      ],
    },
    {
      title: 'SOCIALES',
      iconKey: 'heart',
      items: [
        'Bodas',
        'Quince años',
        'Primeras comuniones',
        'Bautismos',
        'Baby shower',
        'Cumpleaños',
        'Grados',
        'Despedidas de empresas',
      ],
    },
    {
      title: 'RELIGIOSOS Y PROTOCOLO',
      iconKey: 'church',
      items: [
        'Congresos',
        'Asambleas',
        'Eventos de colegios',
        'Eventos de protocolo',
        'Eventos políticos',
        'Misas e iglesias',
      ],
    },
  ],
};

export const nosotrosPageContent = {
  hero: {
    badge: siteConfig.availabilityLabel,
    title: 'PR Producciones',
    subtitle: 'Productora y Agencia de Eventos Profesional',
    description: 'Somos una productora integral con amplia experiencia en la logística, coordinación de personal, seguridad y producción técnica para todo tipo de eventos a nivel nacional. Combinamos visión empresarial, talento calificado y tecnología para garantizar resultados excepcionales y hacer realidad tus proyectos en cualquier parte del país.',
    ctaLabel: 'Trabajar con nosotros',
    image: 'https://images.unsplash.com/photo-1703763872638-bd28599b6c36',
    imageAlt: 'Equipo profesional de PR PRODUCCIONES',
  },
  pillars: {
    title: 'Experiencia y capacidades',
    description: 'Soluciones integrales con cobertura en todo el país',
    items: [
      { iconKey: 'users', title: 'Logística Integral', description: 'Planificación minuciosa y coordinación operativa de eventos de cualquier escala.' },
      { iconKey: 'shield', title: 'Seguridad Comercial', description: 'Coordinación de vigilancia, control de accesos y escoltas profesionales.' },
      { iconKey: 'megaphone', title: 'Activación de Marca / BTL', description: 'Estrategias de marketing no convencionales en puntos de venta y eventos.' },
      { iconKey: 'music', title: 'Entretenimiento y Shows', description: 'Booking artístico, contratación de grupos musicales y shows de animación.' },
      { iconKey: 'settings', title: 'Producción Técnica', description: 'Montaje de sistemas de sonido profesional, iluminación y pantallas LED.' },
      { iconKey: 'clock', title: 'Soporte 24/7', description: 'Atención ininterrumpida y capacidad de respuesta inmediata a nivel nacional.' },
    ],
  },
  liveMusic: {
    title: 'Música en Vivo y Entretenimiento',
    description: 'Como parte de nuestras soluciones de entretenimiento, contamos con alianzas y agrupaciones musicales exclusivas como La Autonomía Vallenata, llevando la mejor música en vivo a escenarios de toda Colombia.',
    supportingText: 'Nuestra amplia experiencia en producción artística y técnica nos permite entender y coordinar profundamente las necesidades de cada show, garantizando espectáculos memorables y de la más alta calidad para tu marca o evento social.',
  },
};

export const contactPageContent = {
  hero: {
    title: 'AQUELLO QUE NO PUEDES DECIR,',
    highlight: 'LO DECIMOS POR TI',
    description: 'Comunicamos de manera eficiente todo lo relacionado con tu negocio. Estamos listos para hacer realidad tu evento.',
    badge: siteConfig.availabilityLabel,
  },
  form: {
    title: 'Envíanos un mensaje',
    description: 'Cuéntanos sobre tu evento o proyecto y te responderemos lo antes posible.',
    submitLabel: 'Enviar mensaje',
    submittingLabel: 'Enviando...',
    successMessage: 'Mensaje enviado correctamente',
    errorMessage: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
    fields: {
      nombre: {
        label: 'Nombre completo',
        placeholder: 'Tu nombre',
      },
      email: {
        label: 'Correo electrónico',
        placeholder: 'tu@email.com',
      },
      telefono: {
        label: 'Teléfono',
        placeholder: siteConfig.phone.placeholder,
        description: 'Puedes escribir celular o WhatsApp con o sin espacios.',
      },
      mensaje: {
        label: 'Mensaje',
        placeholder: 'Cuéntanos sobre tu evento o proyecto...',
        description: 'Incluye tipo de evento, ciudad, fecha o cualquier detalle importante.',
      },
    },
  },
  contactInfo: {
    title: 'Información de contacto',
    phoneLabel: 'Teléfono / WhatsApp',
    emailLabel: 'Correo electrónico',
    coverageLabel: 'Cobertura',
  },
  socialTitle: 'Síguenos en redes',
  closingText: 'No te dejes confundir, es la mejor opción si quieres activar. Llama, cotiza, pregunta, no te quedes quieto.',
};
