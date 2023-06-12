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
    cpf: z.string().length(11).nonempty("Seu cpf é obrigatorio"),
    phone: z
      .string()
      .regex(
        new RegExp(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/),
        "Formato de telefone inválido, utilize: (DDD)xxxxx-xxxx"
      )
      .nonempty("Seu telefone é obrigatorio"),
    birthDate: z
      .string()
      .datetime(
        "Invalid datetime string, datetime must be in format YYYY-MM-DDTHH:MM:SSZ, use .toISOString() to convert you date."
      )
      .nonempty("Sua data de nascimento é obrigatorio"),
    description: z
      .string()
      .min(3, "O nome precisa ter ao menos 3 caracteres")
      .max(150, "O nome precisa ter no máximo 150 caracteres")
      .nonempty("Sua descrição é obrigatoria"),
    isAdvertiser: z.boolean().default(false),
    zipCode: z
      .string()
      .nonempty("O CEP é obrigatorio")
      .refine((value) => /^\d{5}-\d{3}$/.test(value), {
        message: "El valor debe ser un CEP válido en el formato XXXXX-XXX."
      }),
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
