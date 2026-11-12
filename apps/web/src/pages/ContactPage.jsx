import React from 'react';
import Seo from '@/components/Seo.jsx';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm.jsx';
import { socialIconMap } from '@/components/icons/SocialIcons';
import { contactPageContent, pageSeo } from '@/data/pages';
import { contactEmails, contactPhones, siteConfig, socialLinks } from '@/data/site';

const ContactPage = () => {
  return (
    <>
      <Seo page={pageSeo.contacto} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="dark dark-premium-section text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter">
              {contactPageContent.hero.title} <br/><span className="text-primary">{contactPageContent.hero.highlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              {contactPageContent.hero.description}
            </p>
            <div className="premium-surface mt-8 inline-flex items-center space-x-2 rounded-full border border-white/10 px-6 py-3 text-sm font-bold tracking-widest uppercase shadow-lg text-white">
              <Clock className="w-5 h-5" />
              <span>{contactPageContent.hero.badge}</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-spacing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-card p-8 rounded-3xl shadow-xl border border-border">
                <h2 className="text-3xl font-black text-foreground mb-3">{contactPageContent.form.title}</h2>
                <p className="text-muted-foreground mb-8">{contactPageContent.form.description}</p>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-black text-foreground mb-8">{contactPageContent.contactInfo.title}</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-6 p-6 rounded-2xl bg-muted border border-transparent">
                      <div className="p-4 rounded-xl bg-white shadow-sm">
                        <Phone className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">{contactPageContent.contactInfo.phoneLabel}</div>
                        {contactPhones.map((phone) => (
                          <a
                            key={phone.href}
                            href={phone.href}
                            className="block text-2xl font-black text-foreground hover:text-primary transition-colors duration-200"
                          >
                            {phone.display}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 p-6 rounded-2xl bg-muted border border-transparent">
                      <div className="p-4 rounded-xl bg-white shadow-sm">
                        <Mail className="w-7 h-7 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">{contactPageContent.contactInfo.emailLabel}</div>
                        {contactEmails.map((email) => (
                          <a
                            key={email.href}
                            href={email.href}
                            className="block text-xl font-black text-foreground break-all hover:text-primary transition-colors duration-200"
                          >
                            {email.display}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 p-6 rounded-2xl bg-muted">
                      <div className="p-4 rounded-xl bg-white shadow-sm">
                        <MapPin className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">{contactPageContent.contactInfo.coverageLabel}</div>
                        <div className="text-xl font-black text-foreground">{siteConfig.coverage}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-2xl font-black text-foreground mb-6">{contactPageContent.socialTitle}</h3>
                  <div className="flex space-x-4 flex-wrap gap-y-4">
                    {socialLinks.map((link) => {
                      const Icon = socialIconMap[link.iconKey];

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-5 rounded-2xl bg-muted hover:bg-primary hover:text-white transition-all duration-300 group"
                          aria-label={link.label}
                        >
                          <Icon className="w-7 h-7" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Closing Phrase */}
                <div className="premium-surface text-white rounded-2xl p-8 shadow-lg">
                  <p className="text-xl font-bold leading-relaxed">
                    {contactPageContent.closingText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;