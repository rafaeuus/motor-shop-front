import { z } from "zod";

export const commentSchema = z.object({
  content: z.string().min(2, "Precisa ter no mínimo 2 caracteres")
});

export const commentSchemaResponse = commentSchema.extend({
  id: z.string(),
  carId: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  user: z.array(z.string())
});
