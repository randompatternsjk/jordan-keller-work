import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    featuredVideo: z.string().optional(),
    pubDate: z.coerce.date(),
    duties: z.array(z.string()).optional(),
    type: z.string().optional(),
  }),
});

export const collections = { projects };
