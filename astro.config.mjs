import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";
import metaTags from "astro-meta-tags";
import mdx from "@astrojs/mdx";
import vtbot from "astro-vtbot";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://portfolio-ncp.vercel.app',
  prefetch: {
    prefetchAll: true
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: false
    },
    imageService: true
  }),
  integrations: [metaTags(), mdx(), vtbot(), react(), icon({
	iconDir: "src/images/icons",
  })],
  build: {
    trailingSlash: 'never'
  }
});