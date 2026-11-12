#!/usr/bin/env node
/**
 * Pre-renderiza cada ruta del sitio a un HTML estático con su contenido y sus
 * etiquetas <head> (título, descripción, Open Graph). Así Google, WhatsApp,
 * Facebook, etc. ven cada página sin ejecutar JavaScript.
 *
 * Uso (lo llama `npm run build`):
 *   node tools/prerender.mjs <carpeta del build del cliente> <carpeta del build SSR>
 *
 * Genera:  /           -> index.html
 *          /servicios  -> servicios.html   (el .htaccess sirve /servicios desde aquí)
 *          404         -> 404.html
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [clientDir, ssrDir] = process.argv.slice(2).map((dir) => path.resolve(dir));
if (!clientDir || !ssrDir) {
	console.error('Uso: node tools/prerender.mjs <clientDir> <ssrDir>');
	process.exit(1);
}

const template = fs.readFileSync(path.join(clientDir, 'index.html'), 'utf8');
for (const marker of ['<!--app-head-->', '<!--app-html-->']) {
	if (!template.includes(marker)) {
		throw new Error(`index.html no contiene el marcador ${marker}`);
	}
}

const { render, prerenderRoutes } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.mjs')).href);

const pages = [
	...prerenderRoutes.map((url) => ({ url, file: url === '/' ? 'index.html' : `${url.slice(1)}.html` })),
	{ url: '/__pagina-no-encontrada__', file: '404.html' },
];

for (const { url, file } of pages) {
	const { html, head } = await render(url);
	if (!html.trim()) {
		throw new Error(`La ruta ${url} se renderizó vacía`);
	}
	const output = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
	fs.writeFileSync(path.join(clientDir, file), output);
	console.log(`✓ ${url.padEnd(28)} -> ${file} (${(output.length / 1024).toFixed(1)} kB)`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
