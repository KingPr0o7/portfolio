import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";
import metaTags from "astro-meta-tags";
import mdx from "@astrojs/mdx";
import vtbot from "astro-vtbot";
import lottie from "astro-integration-lottie";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://www.ncp.dev/',
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
  integrations: [metaTags(), mdx(), vtbot(), lottie(), react(), icon({
	iconDir: "src/images/icons",
  })],
  build: {
    trailingSlash: 'never'
  }
});