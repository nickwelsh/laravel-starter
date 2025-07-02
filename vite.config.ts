import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import ziggy from 'vite-plugin-ziggy';

export default defineConfig({
	build: {
		target: 'ES2022',
	},
	esbuild: {
		jsx: 'automatic',
	},
	plugins: [
		laravel({
			input: ['resources/css/app.css', 'resources/js/app.tsx'],
			refresh: true,
			ssr: 'resources/js/ssr.tsx',
		}),
		ziggy({
			// except: ['debugbar.*'],
			path: 'resources/js/ziggy',
			typesOnly: true,
		}),
		react({
			babel: {
				plugins: [
					["babel-plugin-react-compiler", { target: "19" }],
				],
			},
		}),
		tailwindcss(),
	],
	resolve: {
		alias: {
			'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
		},
	},
});
