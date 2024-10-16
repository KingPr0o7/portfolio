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

const text = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.string(),
		thumbnail: z.string(),
	}),
})

const projects = defineCollection({
	schema: z.object({
		name: z.string(),
		thumbnail: z.string()
	})
})

export const collections = {
	'blog': blog,
	'text': text,
	'projects': projects
};