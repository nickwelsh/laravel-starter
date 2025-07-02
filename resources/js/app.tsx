import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

import { env } from '@/env';

import { initializeTheme } from './hooks/use-appearance';

await createInertiaApp({
	progress: {
		color: '#4B5563',
	},
	resolve: name => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
	setup({ App, el, props }) {
		const root = createRoot(el);

		root.render(<App {...props} />);
	},
	title: title => `${title} - ${env.VITE_APP_NAME}`,
});

// This will set light / dark mode on load...
initializeTheme();
