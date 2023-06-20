import { z } from "zod";

export const recoverPasswordSchema = z.object({
  email: z.string().max(100).email("Formato de email inválido").nonempty("Seu email é obrigatório")
});

export type IRecoverPassword = z.infer<typeof recoverPasswordSchema>;
