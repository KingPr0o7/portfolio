import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
 
export default defineConfig({
	output: 'static',
	site: 'https://portfolio-ncp.vercel.app/',
	adapter: vercelStatic({
		webAnalytics: {
			enabled: true,
		},
		speedInsights: {
			enabled: false,
		},
	}),
});