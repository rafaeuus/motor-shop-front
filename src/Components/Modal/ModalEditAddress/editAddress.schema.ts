import { z } from "zod";

export const editAddressSchema = z.object({
    zipCode: z.string()
    .nonempty("O CEP é obrigatório")
    .length(9, "O CEP precisa ter 8 dígitos"),
    state: z.string().nonempty("O estado é obrigatório!"),
    city: z.string().nonempty("A cidade é obrigatória!"),
    street: z.string().nonempty("A rua é obrigatória!"),
    number: z.string().nonempty("O número é obrigatório!"),
    complement: z.string().nullable(),
}).partial().refine(async({zipCode}) => {    
    const cep = zipCode?.replace(/\D/g, "")
    if(cep?.length === 8){
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const json = await response.json()
        return json.erro ? false : true
    }
}, {
    path: ["zipCode"],
    message: "CEP Inválido"
});

export type IEditAddress = z.infer<typeof editAddressSchema>;