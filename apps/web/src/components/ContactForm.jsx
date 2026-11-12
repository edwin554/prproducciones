import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import { contactPageContent } from '@/data/pages';
import { buildWhatsAppLink } from '@/data/site';
import { trackEvent } from '@/lib/analytics';

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT ?? '/api/contact.php';

const buildWhatsAppUrl = ({ nombre, email, telefono, tipoEvento, ciudad, fecha, asistentes, mensaje }) => {
  const lines = [
    `Hola, soy ${nombre}. Quiero cotizar: ${tipoEvento} en ${ciudad}.`,
    fecha ? `Fecha: ${fecha}` : null,
    asistentes ? `Asistentes: ${asistentes}` : null,
    mensaje || null,
    '',
    `Correo: ${email}`,
    `Teléfono: ${telefono}`,
  ].filter((line) => line !== null);
  return buildWhatsAppLink(lines.join('\n'));
};

const fields = contactPageContent.form.fields;
const selectClassName =
  'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base text-gray-900 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm';

// Fecha de hoy (AAAA-MM-DD, hora local) para no permitir fechas pasadas.
const todayIso = () => {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
};

const DEFAULT_VALUES = {
  nombre: '',
  email: '',
  telefono: '',
  tipoEvento: '',
  ciudad: '',
  fecha: '',
  asistentes: '',
  mensaje: '',
};

const normalizeSingleLineText = (value) => value.trim().replace(/\s+/g, ' ');

const normalizePhoneText = (value) => value.trim().replace(/\s+/g, ' ');

const contactFormSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(3, 'Ingresa un nombre válido.')
    .max(120, 'El nombre es demasiado largo.'),
  email: z.string().trim().email('Ingresa un correo electrónico válido.'),
  telefono: z
    .string()
    .trim()
    .refine((value) => {
      const digits = value.replace(/\D/g, '');
      return digits.length >= 7 && digits.length <= 15;
    }, 'Ingresa un número válido.'),
  tipoEvento: z.string().min(1, 'Elige el tipo de evento.'),
  ciudad: z.string().trim().min(2, 'Indica la ciudad.').max(80, 'Nombre de ciudad demasiado largo.'),
  fecha: z.string(),
  asistentes: z.string(),
  mensaje: z.string().trim().max(1000, 'El mensaje es demasiado largo.'),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
  });

  const [honeypot, setHoneypot] = React.useState('');
  // Se calcula en el navegador: el HTML pre-renderizado no debe llevar la fecha del build.
  const [minDate, setMinDate] = React.useState(undefined);
  React.useEffect(() => setMinDate(todayIso()), []);

  const handleSubmit = async (values) => {
    const payload = {
      nombre: normalizeSingleLineText(values.nombre),
      email: values.email.trim().toLowerCase(),
      telefono: normalizePhoneText(values.telefono),
      tipoEvento: values.tipoEvento,
      ciudad: normalizeSingleLineText(values.ciudad),
      fecha: values.fecha,
      asistentes: values.asistentes,
      mensaje: values.mensaje.trim(),
    };

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...payload, empresa_web: honeypot }),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        throw new Error(result?.error ?? `HTTP ${response.status}`);
      }

      trackEvent('generate_lead', { form_name: 'contacto', event_type: payload.tipoEvento });
      toast.success(contactPageContent.form.successMessage);
      form.reset(DEFAULT_VALUES);
    } catch (error) {
      console.error('Error sending message:', error);
      const whatsappUrl = buildWhatsAppUrl(payload);
      toast.error(contactPageContent.form.errorMessage, {
        duration: 15000,
        action: {
          label: contactPageContent.form.whatsappFallbackLabel,
          onClick: () => {
            trackEvent('click_whatsapp', { link_location: 'form_fallback' });
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
          },
        },
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6" noValidate>
        {/* Campo trampa anti-spam: oculto para personas, los bots suelen llenarlo. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="empresa_web">Empresa</label>
          <input
            id="empresa_web"
            name="empresa_web"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{contactPageContent.form.fields.nombre.label}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  autoComplete="name"
                  className="text-gray-900 placeholder:text-gray-400"
                  placeholder={contactPageContent.form.fields.nombre.placeholder}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{contactPageContent.form.fields.email.label}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  autoComplete="email"
                  className="text-gray-900 placeholder:text-gray-400"
                  placeholder={contactPageContent.form.fields.email.placeholder}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="telefono"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{contactPageContent.form.fields.telefono.label}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  autoComplete="tel"
                  className="text-gray-900 placeholder:text-gray-400"
                  placeholder={contactPageContent.form.fields.telefono.placeholder}
                />
              </FormControl>
              <FormDescription>{contactPageContent.form.fields.telefono.description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="tipoEvento"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fields.tipoEvento.label}</FormLabel>
                <FormControl>
                  <select {...field} className={selectClassName}>
                    <option value="" disabled>
                      {fields.tipoEvento.placeholder}
                    </option>
                    {fields.tipoEvento.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ciudad"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fields.ciudad.label}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    autoComplete="address-level2"
                    className="text-gray-900 placeholder:text-gray-400"
                    placeholder={fields.ciudad.placeholder}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fecha"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fields.fecha.label}</FormLabel>
                <FormControl>
                  <Input {...field} type="date" min={minDate} className="text-gray-900" />
                </FormControl>
                <FormDescription>{fields.fecha.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="asistentes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fields.asistentes.label}</FormLabel>
                <FormControl>
                  <select {...field} className={selectClassName}>
                    <option value="">{fields.asistentes.placeholder}</option>
                    {fields.asistentes.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="mensaje"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{contactPageContent.form.fields.mensaje.label}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={4}
                  className="text-gray-900 placeholder:text-gray-400"
                  placeholder={contactPageContent.form.fields.mensaje.placeholder}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
          className="premium-button w-full border border-white/10 text-white active:scale-[0.98]"
        >
          {form.formState.isSubmitting ? contactPageContent.form.submittingLabel : contactPageContent.form.submitLabel}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;