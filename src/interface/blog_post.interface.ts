import { z } from 'zod';

export const BlogPostCommentZod = z.object({
  content: z.string(),
  date: z.string(),
  author: z.string(),
});

export const BlogPostCommentArrayZod = z.array(BlogPostCommentZod);

export type BlogPostComment = z.infer<typeof BlogPostCommentZod>;

export const BlogPostZod = z.object({
  title: z.string(),
  content: z.string(),
  author: z.string(),
  likes: z.number(),
  likedByMe: z.boolean(),
  comments: BlogPostCommentArrayZod,
});

export type BlogPost = z.infer<typeof BlogPostZod>;
