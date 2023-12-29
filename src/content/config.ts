import { z, defineCollection } from "astro:content";

const testimonials = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string().max(25, {
        message: "Name can't be longer than 25 chs",
      }),
      location: z.string(),
      testimony: z.string().max(160, {
        message: "Testimony can't be longer than 25 characters",
      }),
      headshot: image(),
    }),
});

export const collections = {
  testimonials,
};
