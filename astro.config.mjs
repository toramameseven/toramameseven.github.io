import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://toramameseven.github.io',
	trailingSlash: "always",
	integrations: [
		starlight({
			title: 'ToramameSeven',
			// favicon: '/favicon.svg',
			social: {
				github: 'https://github.com/toramameseven',
			},
			sidebar: [
				{
					label: 'guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
