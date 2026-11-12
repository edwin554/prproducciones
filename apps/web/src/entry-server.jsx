import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Writable } from 'node:stream';
import App, { prerenderRoutes } from '@/App';
import { SeoContext, seoToHtml } from '@/components/Seo.jsx';

export { prerenderRoutes };

// Renderiza una URL a HTML esperando a que carguen todas las páginas diferidas.
export function render(url) {
  const seoCollector = {};
  const app = (
    <React.StrictMode>
      <SeoContext.Provider value={seoCollector}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoContext.Provider>
    </React.StrictMode>
  );

  return new Promise((resolve, reject) => {
    let html = '';
    const sink = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
      final(callback) {
        if (!seoCollector.seo) {
          reject(new Error(`La ruta ${url} no definió su <Seo>`));
        } else {
          resolve({ html, head: seoToHtml(seoCollector.seo) });
        }
        callback();
      },
    });

    const stream = renderToPipeableStream(app, {
      onAllReady() {
        stream.pipe(sink);
      },
      onShellError: reject,
      onError: reject,
    });
  });
}
