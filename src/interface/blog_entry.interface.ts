import { z } from 'zod';

export const BlogEntryZod = z.object({
  id: z.number(),
  title: z.string(),
  contentPreview: z.string(),
  author: z.string(),
  likes: z.number(),
  comments: z.number(),
  likedByMe: z.boolean(),
  createdByMe: z.boolean(),
});

export const BlogEntryArrayZod = z.array(BlogEntryZod);

export type BlogEntry = z.infer<typeof BlogEntryZod>;
