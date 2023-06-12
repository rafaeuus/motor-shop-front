import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("Campo obrigatório").email("Formato de e-mail inválido"),
  password: z.string().min(6, "A senha deve possuir no mínimo 6 caracteres")
});

export type ILoginForm = z.infer<typeof loginSchema>;
