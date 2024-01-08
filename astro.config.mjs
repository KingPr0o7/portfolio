import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://portfolio-ncp.vercel.app/',
	adapter: vercel({
		webAnalytics: {
			enabled: true
		},
		speedInsights: {
			enabled: false
		},
		imageService: true,
	}),
	integrations: [metaTags()],
	build: {
		trailingSlash: 'never',
	}
});