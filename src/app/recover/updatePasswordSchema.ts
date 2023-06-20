import { z } from "zod";

export const updatePasswordSchema = z
  .object({
    password: z.string().min(6, "A senha deve possuir no mínimo 6 caracteres"),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmPassword"]
  });

export type IUpdatePasswordForm = z.infer<typeof updatePasswordSchema>;
