"use client";

import { ModalContext } from "@/contexts/ModalContext.tsx";
import { useContext } from "react";

export const ModalImageCar = () => {
  const { modalImageCarUrl } = useContext(ModalContext);
  return (
    <div className="h-56 w-full bg-grey7">
      <picture className="h-[80%] w-full ">
        <img
          className="h-full w-full  bg-transparent object-contain"
          src={modalImageCarUrl}
          alt="Imagem do veículo"
          width={312}
          height={132}
        />
      </picture>
    </div>
  );
};
