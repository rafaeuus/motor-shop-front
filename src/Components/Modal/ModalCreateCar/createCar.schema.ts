import { z } from "zod";

export const createCarSchema = z.object({
  brand: z.string().nonempty("Campo obrigatório"),
  model: z.string().nonempty("Campo obrigatório"),
  mileage: z
    .number()
    .min(0, {
      message: "Mínimo 0 KM"
    })
    .int()
    .nonnegative(),

  year: z.string().nonempty("Selecione o modelo"),
  fuelType: z.string().nonempty("Selecione o modelo"),
  color: z.string().min(4, "Mínimo de 4 caracteres").max(150).nonempty(),
  fipePrice: z
    .number()
    .min(1, {
      message: "Selecione o modelo"
    })
    .nonnegative(),
  price: z.number().min(1, "Mímino R$ 1,00"),
  description: z.string().min(50, "Precisa ter no mínimo 50 caracteres").nonempty(),
  coverImage: z.string().url("Url inválida").nonempty(),
  url: z.array(z.string())
});

export type ICarsCreate = z.infer<typeof createCarSchema>;
