import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import metaTags from "astro-meta-tags";
import mdx from "@astrojs/mdx";
import vtbot from "astro-vtbot";

import react from "@astrojs/react";

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
    },
    imageService: true
  }),
  integrations: [metaTags(), mdx(), vtbot(), react()],
  build: {
    trailingSlash: 'never'
  }
});