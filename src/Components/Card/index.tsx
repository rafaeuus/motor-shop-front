import carExample from "./assets/carExample.png";
import Image, { StaticImageData } from "next/image";

// Criado apenas para exemplificar o uso do card
interface CardProps {
  car?: {
    brand: string;
    model: string;
    year: string;
    fuel_type: string;
    mileage: number;
    color: string;
    fipe_price: number;
    price: number;
    description: string;
    user: {
      name: string;
    };
    created_at: Date;
    is_published: boolean;
    cover_image: string | StaticImageData;
  };
  isAdvertiserOwner: boolean;
}

const Card = ({ car, isAdvertiserOwner }: CardProps) => {
  if (car?.cover_image === "") {
    // eslint-disable-next-line camelcase
    car.cover_image = carExample;
  }

  return (
    <div className="group m-2 flex h-[342px] max-w-xs flex-col justify-between">
      <div className="relative flex h-36 max-h-36 w-full justify-center border-2 border-grey7 bg-grey7 object-cover transition group-hover:border-Brand1">
        <Image
          className="h-full bg-transparent object-contain"
          src={car ? car.cover_image : carExample}
          alt="Imagem do veículo"
        />
        {isAdvertiserOwner && (
          <span
            className={`prose-textBold2 absolute left-4 top-[11px] bg-Brand1 px-2 text-grey10 ${
              car!.is_published ? "bg-Brand1" : "bg-grey4"
            }`}>
            {car!.is_published ? "Ativo" : "Inativo"}
          </span>
        )}
      </div>
      <div className="flex h-[182px] flex-col justify-between text-grey1">
        <p className="prose-textBold1 truncate">
          {car ? car.model : "Product title stays here - max 1 line"}
        </p>
        <p className="prose-text4 text-grey2 line-clamp-2 ">
          {car
            ? car.description
            : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis assumenda nobis tempore reprehenderit veniam perferendis fugit cupiditate laboriosam numquam, vitae molestias cum debitis commodi quos ab tenetur iste expedita eaque."}
        </p>
        <div className="flex items-center gap-2">
          <span className="prose-textBold2 flex h-8 w-8 items-center justify-center rounded-full bg-Brand2 text-grey10">
            {car ? car.user.name[1] : "R"}
          </span>
          <span className="prose-textBold2 text-grey2">{car ? car.user.name : "Anunciante"}</span>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <span className="prose-textBold2 rounded bg-Brand4 px-2 py-1 text-Brand1">
              {car ? car.mileage : 0} KM
            </span>
            <span className="prose-textBold2 rounded bg-Brand4 px-2 py-1 text-Brand1">
              {car ? car.year : "2019"}
            </span>
          </div>
          <span className="prose-textBold1">
            {car
              ? car.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
              : "R$ 00.000,00"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
