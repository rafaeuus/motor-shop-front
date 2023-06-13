import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "O nome precisa ter ao menos 3 caracteres")
      .max(100, "O nome precisa ter no máximo 150 caracteres")
      .nonempty("Seu nomre é obrigatorio")
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
      .nonempty("Seu email é obrigatorio"),
    cpf: z
      .string()
      .length(14, "O cpf precisa ter 11 digitos")
      .nonempty("Seu cpf é obrigatorio")
      .transform((value) => value.replace(/\D/g, "")),
    phone: z
      .string()
      .length(15, "O telefone precisa ter 11 digitos")
      .nonempty("Seu telefone é obrigatorio")
      .transform((value) => "55" + value.replace(/\D/g, "")),
    birthDate: z
      .string()
      .nonempty("Sua data de nascimento é obrigatorio")
      .transform((value) => new Date(value).toISOString()),
    description: z
      .string()
      .min(3, "A descrição precisa ter ao menos 5 caracteres")
      .max(150, "O nome precisa ter no máximo 150 caracteres")
      .nonempty("Sua descrição é obrigatoria"),
    isAdvertiser: z
      .string()
      .nonempty("É necessario informar se vocé é um anunciante ou não")
      .transform((value) => (value === "true" ? true : false)),
    zipCode: z
      .string()
      .nonempty("O CEP é obrigatorio")
      .length(9, "O CEP precisa ter 8 digitos")
      .transform((value) => value.replace(/\D/g, "")),
    state: z.string().nonempty("O estado é obrigatorio"),
    city: z.string().nonempty("A cidade é obrigatoria"),
    street: z.string().nonempty("A rua é obrigatoria"),
    number: z.string().nonempty("O némero é obrigatorio"),
    complement: z.string().nullable(),
    password: z
      .string()
      .min(6, "O password precisa ter ao menos 6 caracteres")
      .max(120, "O password precisa ter no máximo 120 caracteres")
      .regex(new RegExp(".*[A-Z].*"), "O password precisa ter ao menos uma letra maiúscula")
      .regex(new RegExp(".*[a-z].*"), "O password precisa ter ao menos uma letra minéscula")
      .regex(new RegExp(".*\\d.*"), "O password precisa ter ao menos um némero")
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "O password precisa ter ao menos um caractere especial"
      ),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Os passwords não conferem, precisam ser iguais",
    path: ["confirmPassword"]
  });

export type TRegisterData = z.infer<typeof registerSchema>;
