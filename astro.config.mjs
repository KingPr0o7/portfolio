import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
	output: 'server',
	site: 'https://portfolio-ncp.vercel.app/',
	adapter: vercel({
		webAnalytics: {
			enabled: true
		},
		speedInsights: {
			enabled: false
		}
	}),
	integrations: [metaTags()],
	build: {
		trailingSlash: 'never',
	}
});