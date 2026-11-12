import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ isSsrBuild }) => ({
	plugins: [react()],
	server: {
		port: 3000,
	},
	// El build SSR (pre-renderizado) empaqueta las dependencias para evitar problemas CommonJS/ESM en Node.
	ssr: {
		noExternal: true,
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		rollupOptions: {
			// Librerías en archivos aparte: cambian poco y el navegador las mantiene en caché entre despliegues.
			// (Solo en el build del navegador; el build SSR del pre-renderizado no las necesita.)
			output: isSsrBuild
				? { entryFileNames: '[name].mjs', chunkFileNames: '[name]-[hash].mjs' }
				: {
					manualChunks: {
						'vendor-react': ['react', 'react-dom', 'react-router-dom'],
						'vendor-motion': ['framer-motion'],
					},
				},
		},
	},
}));
