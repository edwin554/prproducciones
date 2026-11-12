# PR Producciones — sitio web

Sitio de **PR Producciones**, productora de eventos y activación BTL en Colombia.
En producción: <https://prproduccionesbtl.com>

## Tecnología

- **React 18 + Vite** con Tailwind CSS y componentes shadcn/ui (`apps/web`).
- **Pre-renderizado**: en el build cada ruta se genera como HTML estático (contenido + SEO)
  y el navegador lo "hidrata" con React.
- **Formulario de contacto**: `apps/web/public/api/contact.php` (PHP en el hosting).
- **Hosting**: Hostinger (LiteSpeed). Despliegue automático por FTPS con GitHub Actions.

## Desarrollo

Requiere Node 22 (ver `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # genera dist/apps/web (incluye el pre-renderizado)
```

## Estructura

```
apps/web/
  src/
    data/           Textos y datos del sitio (contacto, SEO, contenidos de cada página)
    pages/          Una página por ruta
    components/     Header, Footer, Layout, Seo, formularios y tarjetas
    entry-server.jsx  Render en servidor usado por el pre-renderizado
  tools/prerender.mjs Genera index.html, servicios.html, …, 404.html
  public/
    .htaccess       Redirección www, rutas .html, 404 real y cabeceras
    api/            contact.php, lib/SmtpMailer.php, data/ (mensajes guardados)
```

La mayoría de los cambios de contenido (teléfonos, correos, textos, imágenes) se hacen en
`apps/web/src/data/`.

### Añadir una página

1. Crear `src/pages/NuevaPage.jsx` con `<Seo page={pageSeo.nueva} />` al inicio.
2. Añadir sus datos SEO en `pageSeo` (`src/data/pages.js`).
3. Registrar la ruta en `src/App.jsx` y añadirla a `prerenderRoutes`.
4. Añadirla a `navigationLinks` (`src/data/site.js`) y a `public/sitemap.xml`.

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`: lint → build → genera
`api/config.php` con las credenciales SMTP → sube `dist/apps/web` por FTPS.

Secretos de GitHub (Settings → Secrets and variables → Actions):

| Secreto | Uso |
|---|---|
| `FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD` | Subida por FTPS a Hostinger |
| `SMTP_USER`, `SMTP_PASS` | Buzón del dominio con el que el formulario envía los avisos |
| `SMTP_HOST`, `SMTP_PORT` | Opcionales (por defecto `smtp.hostinger.com` y `465`) |

## Formulario de contacto

Cada mensaje se guarda en `public_html/api/data/mensajes.log.php` (una línea JSON por
mensaje; la carpeta está bloqueada al navegador) y se envía un aviso por correo. Si el
correo falla, el visitante ve un botón para escribir por WhatsApp.
