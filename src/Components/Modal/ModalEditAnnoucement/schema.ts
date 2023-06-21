import { z } from "zod";

export const editCarSchema = z.object({
  brand: z.string().nonempty("Campo obrigatório"),
  model: z.string().nonempty("Campo obrigatório"),
  mileage: z.coerce
    .number()
    .min(1, {
      message: "Mínimo 1 KM"
    })
    .int(),
  year: z.string().nonempty("Selecione o modelo"),
  fuelType: z.string().nonempty("Selecione o modelo"),
  color: z.string().min(4, "Mínimo de 4 caracteres").max(150).nonempty(),
  fipePrice: z.number().nonnegative().or(z.string()),
  price: z.coerce.number().min(1, "Mímino R$ 1,00"),
  description: z.string().min(50, "Precisa ter no mínimo 50 caracteres").nonempty(),
  coverImage: z.string().url("Url inválida").nonempty(),
  links: z.array(
    z.object({
      url: z.string().url("Url inválida").nonempty(),
      idImage: z.string().nullish(),
      carId: z.string().nullish()
    })
  )
});

export type ICarsEdit = z.infer<typeof editCarSchema>;
export interface IimagesCar {
  id: string;
  url: string;
  carId: string;
  idImage: string;
}
