import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://portfolio-ncp.vercel.app/',
	adapter: vercelStatic({
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