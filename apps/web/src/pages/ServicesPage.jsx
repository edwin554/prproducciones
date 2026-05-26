import React from 'react';
import { Helmet } from 'react-helmet';
import { Mic, Volume2, Shield, Car, Users, Wrench, Music, Lightbulb, Sparkles, Calendar, Drumstick as Drum, Music as Guitar, Drumstick as Violin, Megaphone, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

const ServicesPage = () => {
  const services = [
    { name: 'Animación y locución', description: 'Voces profesionales para dar vida y energía a tu marca o evento.', icon: Mic, color: '#DC143C' },
    { name: 'Megáfono y perifoneo (carro y moto)', description: 'Alcance masivo en movimiento para comunicar tus mensajes clave.', icon: Volume2, color: '#FF6B6B' },
    { name: 'Seguridad y vigilancia privada', description: 'Personal capacitado para garantizar el orden y la tranquilidad.', icon: Shield, color: '#4ECDC4' },
    { name: 'Carro valla y moto valla', description: 'Publicidad móvil de alto impacto visual en rutas estratégicas.', icon: Car, color: '#45B7D1' },
    { name: 'Volanteo/popman/zanqueros', description: 'Interacción directa y llamativa con tu público objetivo.', icon: Users, color: '#FFA07A' },
    { name: 'Logística y seguridad privada', description: 'Coordinación integral para que todo fluya sin contratiempos.', icon: Wrench, color: '#98D8C8' },
    { name: 'Alquiler de sonido y backline', description: 'Equipos de última generación para una acústica perfecta.', icon: Music, color: '#DC143C' },
    { name: 'Luminotecnia', description: 'Diseño de iluminación para crear atmósferas inolvidables.', icon: Lightbulb, color: '#F7DC6F' },
    { name: 'Pirotecnia controlada', description: 'Efectos especiales seguros para momentos cumbre.', icon: Sparkles, color: '#FF6B6B' },
    { name: 'Producción de eventos en general', description: 'Gestión completa desde la idea hasta la ejecución final.', icon: Calendar, color: '#4ECDC4' },
    { name: 'Batucadas y papayera', description: 'Ritmo y alegría tradicional para encender cualquier celebración.', icon: Drum, color: '#45B7D1' },
    { name: 'Eventos con agrupaciones en vivo', description: 'Música en directo con los mejores talentos locales y nacionales.', icon: Guitar, color: '#FFA07A' },
    { name: 'Parranda vallenata/tipibajo/mariachis/música popular/carranga/rock/música andina/tambores/música colombiana', description: 'Diversidad musical para todos los gustos y ocasiones.', icon: Violin, color: '#98D8C8' },
    { name: 'Trío de cuerda y serenata', description: 'Detalles musicales íntimos y elegantes.', icon: Megaphone, color: '#DC143C' },
  ];

  const equipment = [
    'TARIMA',
    'SONIDO',
    'LUCES',
    'BACKLINE'
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - PR PRODUCCIONES</title>
        <meta name="description" content="Descubre nuestros servicios especializados: animación, sonido, seguridad, logística, pirotecnia, música en vivo. Incluimos tarima, sonido, luces y backline." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="text-emphasis mb-4">Soluciones Integrales</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Nuestros servicios
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Cualquier elemento técnico necesario para lograr el plan de trabajo está a tu disposición.
            </p>
          </div>
        </section>

        {/* Technical Equipment Highlight */}
        <section className="py-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Equipamiento Técnico Incluido</h2>
              <p className="text-white/80 mt-2">Todos los elementos técnicos necesarios para tu evento</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {equipment.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-white/10 px-6 py-3 rounded-xl border border-white/20">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  <span className="font-black tracking-wider text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-spacing bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border group">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1" style={{ backgroundColor: `${service.color}15` }}>
                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{service.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;