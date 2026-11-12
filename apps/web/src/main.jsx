import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
// Fuente alojada en el propio sitio (sin petición a Google Fonts).
import '@fontsource-variable/outfit/wght.css';
import '@/index.css';

const app = (
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

const container = document.getElementById('root');

// En producción las páginas llegan pre-renderizadas: se "hidratan" en vez de redibujarse.
if (container.firstElementChild) {
	ReactDOM.hydrateRoot(container, app);
} else {
	ReactDOM.createRoot(container).render(app);
}
