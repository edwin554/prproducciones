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
import pb from '@/lib/pocketbaseClient';
import { contactPageContent } from '@/data/pages';

const DEFAULT_VALUES = {
  nombre: '',
  email: '',
  telefono: '',
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
  mensaje: z
    .string()
    .trim()
    .min(10, 'Cuéntanos un poco más sobre tu solicitud.')
    .max(1000, 'El mensaje es demasiado largo.'),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
  });

  const handleSubmit = async (values) => {
    const payload = {
      nombre: normalizeSingleLineText(values.nombre),
      email: values.email.trim().toLowerCase(),
      telefono: normalizePhoneText(values.telefono),
      mensaje: values.mensaje.trim(),
    };

    try {
      await pb.collection('contacts').create(payload, { $autoCancel: false });
      toast.success(contactPageContent.form.successMessage);
      form.reset(DEFAULT_VALUES);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(contactPageContent.form.errorMessage);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6" noValidate>
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

        <FormField
          control={form.control}
          name="mensaje"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{contactPageContent.form.fields.mensaje.label}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={5}
                  className="text-gray-900 placeholder:text-gray-400"
                  placeholder={contactPageContent.form.fields.mensaje.placeholder}
                />
              </FormControl>
              <FormDescription>{contactPageContent.form.fields.mensaje.description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
        >
          {form.formState.isSubmitting ? contactPageContent.form.submittingLabel : contactPageContent.form.submitLabel}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;