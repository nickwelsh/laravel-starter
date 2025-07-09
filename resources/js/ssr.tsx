import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';
import { route, type RouteName } from 'ziggy-js';

import { env } from '@/env';

createServer(page =>
	createInertiaApp({
		page,
		render: ReactDOMServer.renderToString,
		resolve: name => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
		setup: ({ App, props }) => {
			/* eslint-disable */
			// @ts-expect-error
			global.route = ((name, params, absolute) =>
				route(name, params as any, absolute, {
					// @ts-expect-error
					...page.props.ziggy,
					// @ts-expect-error
					location: new URL(page.props.ziggy.location),
				})) as <T extends RouteName>(name: T, params?: any, absolute?: boolean) => string;
			/* eslint-enable */

			return <App {...props} />;
		},
		title: title => `${title} - ${env.VITE_APP_NAME}`,
	}),
);
