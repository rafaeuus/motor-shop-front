import { z } from "zod";

export const updateSchema = z.object({
  name: z
    .string()
    .min(3, "O nome precisa ter ao menos 3 caracteres")
    .max(100, "O nome precisa ter no máximo 100 caracteres")
    .nonempty("O nome é obrigatório")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  email: z.string().max(100).email("Formato de email inválido").nonempty("Seu email é obrigatório"),
  cpf: z
    .string()
    .length(14, "O cpf precisa ter 11 dígitos")
    .nonempty("O cpf é obrigatório")
    .transform((value) => value.replace(/\D/g, "")),
  phone: z
    .string()
    .length(15, "O telefone precisa ter 11 dígitos")
    .nonempty("O telefone é obrigatório")
    .transform((value) => "55" + value.replace(/\D/g, "")),
  birthDate: z
    .string()
    .nonempty("A data de nascimento é obrigatória")
    .transform((value) => new Date(value).toISOString()),
  description: z
    .string()
    .min(3, "A descrição precisa ter ao menos 5 caracteres")
    .max(150, "A descrição precisa ter no máximo 150 caracteres")
    .nonempty("A descrição é obrigatória")
});

export type TupdateUser = z.infer<typeof updateSchema>;
