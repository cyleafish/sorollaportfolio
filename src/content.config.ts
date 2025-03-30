import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

// export const collections = { blog };

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
      icon: z.string(),
      title: z.string(),
      subtitle: z.string().optional(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
  });

  const working_experience = defineCollection({
    loader: glob({ base: './src/content/working_experience', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
      icon: z.string(),
      title: z.string(),
      subtitle: z.string().optional(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
  });
  const activity_experience = defineCollection({
    loader: glob({ base: './src/content/activity_experience', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
      icon: z.string(),
      title: z.string(),
      subtitle: z.string().optional(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
  });

  const gallery = defineCollection({
    // Load Markdown and MDX files in the `src/content/gallery/` directory.
    loader: glob({ base: './src/content/gallery', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: z.object({
        icon: z.string().optional(),
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
        category:z.string(),
    }),
});

  export const collections = { blog, projects,working_experience,activity_experience,gallery};