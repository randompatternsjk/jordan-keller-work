import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    featuredVideo: z.string().optional(),
    featuredVideoThumb: z.string().optional(),
    type: z.string().optional(),
    category: z.string().optional(),
    duties: z.array(z.string()).default([]), // Instead of .optional()
    color: z.string().optional(),
  }),
});

export const collections = { projects };
