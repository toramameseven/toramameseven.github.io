import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export const locales = {
	root: {
		label: 'English',
		lang: 'en', // langはルートロケールに必要です
	},
	ja: { label: '日本語', lang: 'ja' },
};

// https://astro.build/config
// https://starlight.astro.build/reference/configuration/
export default defineConfig({
	site: 'https://toramameseven.github.io',
	trailingSlash: "always",
	integrations: [
		starlight({
			title: 'ToramameSeven',
			// favicon: '/favicon.svg',
			locales,
			components: {
				// Override the default `SocialIcons` component.
				Search: './src/components/Searchx.astro',
			  },
			social: {
				github: 'https://github.com/toramameseven',
			},
		}),
	],
});
