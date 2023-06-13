import { z } from "zod";

export const registerSchema = z
  .object({
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
    email: z
      .string()
      .max(100)
      .email("Formato de email inválido")
      .nonempty("Seu email é obrigatório"),
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
      .nonempty("A descrição é obrigatória"),
    isAdvertiser: z
      .string()
      .nonempty("É necessário selecionar o tipo de conta: anunciante ou comprador")
      .transform((value) => (value === "true" ? true : false)),
    zipCode: z
      .string()
      .nonempty("O CEP é obrigatório")
      .length(9, "O CEP precisa ter 8 dígitos")
      .transform((value) => value.replace(/\D/g, "")),
    state: z.string().nonempty("O estado é obrigatório"),
    city: z.string().nonempty("A cidade é obrigatório"),
    street: z.string().nonempty("A rua é obrigatório"),
    number: z.string().nonempty("O número é obrigatório"),
    complement: z.string().nullable(),
    password: z
      .string()
      .min(6, "O password precisa ter ao menos 6 caracteres")
      .max(120, "O password precisa ter no máximo 120 caracteres")
      .regex(new RegExp(".*[A-Z].*"), "O password precisa ter ao menos uma letra maiúscula")
      .regex(new RegExp(".*[a-z].*"), "O password precisa ter ao menos uma letra minúscula")
      .regex(new RegExp(".*\\d.*"), "O password precisa ter ao menos um número")
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "O password precisa ter ao menos um caractere especial"
      ),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Os passwords precisam ser iguais",
    path: ["confirmPassword"]
  });

export type TRegisterData = z.infer<typeof registerSchema>;
