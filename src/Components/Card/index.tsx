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
    car.cover_image = "/assets/carExample.png";
  }

  return (
    <div className="group m-2 flex h-[342px] max-w-xs flex-col justify-between">
      <div className="relative flex h-36 max-h-36 w-full justify-center border-2 border-grey7 bg-grey7 object-cover transition group-hover:border-Brand1">
        <Image
          className="h-full bg-transparent object-contain"
          src={car ? car.cover_image : "/assets/carExample.png"}
          alt="Imagem do veículo"
        />
        {isAdvertiserOwner && (
          <span
            className={`prose-body-2-600 absolute left-4 top-[11px] bg-Brand1 px-2 text-grey10 ${
              car!.is_published ? "bg-Bran1" : "bg-grey4"
            }`}>
            {car!.is_published ? "Ativo" : "Inativo"}
          </span>
        )}
        {car && car.fipe_price - (5 / 100) * car.fipe_price >= car.price && (
          <span className="prose-body-2-600 absolute right-0 top-0 bg-Green1 px-1 py-1 text-grey10">
            $
          </span>
        )}
      </div>
      <div className="flex h-[182px] flex-col justify-between text-grey1">
        <p className="prose-heading-7-600 truncate">
          {car ? car.model : "Product title stays here - max 1 line"}
        </p>
        <p className="prose-body-2-400 text-grey2 line-clamp-2 ">
          {car
            ? car.description
            : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis assumenda nobis tempore reprehenderit veniam perferendis fugit cupiditate laboriosam numquam, vitae molestias cum debitis commodi quos ab tenetur iste expedita eaque."}
        </p>
        <div className="flex items-center gap-2">
          <span className="prose-body-2-600 flex h-8 w-8 items-center justify-center rounded-full bg-Brand2 text-grey10">
            {car ? car.user.name[0].toUpperCase() : "R"}
          </span>
          <span className="prose-body-2-600 text-grey2">{car ? car.user.name : "Anunciante"}</span>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <span className="prose-body-2-600  rounded bg-Brand4 px-2 py-1 text-Brand1">
              {car ? car.mileage : 0} KM
            </span>
            <span className="prose-body-2-600  rounded bg-Brand4 px-2 py-1 text-Brand1">
              {car ? car.year : "2019"}
            </span>
          </div>
          <span className="prose-heading-7-500">
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
