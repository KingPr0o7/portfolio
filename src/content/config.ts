import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tone: z.string(),
		date: z.string(),
		thumbnail: z.string(),
		thumbnail_alt: z.string(),
	}),
})

export const collections = {
	'blog': blog,
};