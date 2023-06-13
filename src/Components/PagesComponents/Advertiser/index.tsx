"use client";

import { Button } from "@/Components/Button";
import Card, { IcarAnnouncement } from "@/Components/Card";
import { UserProfile } from "@/app/advertiser/[id]/page";
import { AuthContext } from "@/contexts/AuthContext.tsx";
import { useContext, useState } from "react";

interface AdvertiserMainProps {
  user: UserProfile;
  listCars: IcarAnnouncement[];
}

const AdvertiserMain = ({ user, listCars }: AdvertiserMainProps) => {
  const [cars, setCars] = useState(listCars);
  const { userAuth } = useContext(AuthContext);

  return (
    <main className="min-h-screen bg-gradient-to-b from-Brand1 from-[357px] via-grey8 via-[357px] to-grey8 to-100% pb-[73px] pt-[40px]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-16 px-4">
        <div className="flex w-full max-w-7xl flex-col gap-5 rounded bg-grey10 px-10 py-11">
          <span className="prose-heading-2-600 flex aspect-square h-[104px] w-[104px] items-center justify-center rounded-full bg-Brand1 text-white">
            {cars[0]?.user.name[0].toUpperCase()}
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="prose-heading-6-600 text-grey1">{cars[0]?.user.name}</span>
            <span className="prose-body-2-600 rounded bg-Brand4 px-2 py-1 text-Brand1">
              Anunciante
            </span>
          </div>
          <p className="prose-body-1-400 text-grey2">{cars[0]?.user.description}</p>
          {userAuth && userAuth.id === user.id && (
            <div className="max-w-[170px]">
              <Button color="blue" size="secondary" variant="outlined" type="button" fullWidth>
                Criar anúncio
              </Button>
            </div>
          )}
        </div>
        {userAuth && userAuth.id === user.id && (
          <span className="prose-heading-5-600 self-start text-grey0">Anúncios</span>
        )}
        <div className="w-full">
          <ul className="flex gap-x-12 gap-y-20 overflow-x-scroll md:flex-wrap md:justify-around md:overflow-clip lg:grid lg:grid-cols-3 xl:grid-cols-4">
            {cars.map((car) => (
              <li key={car.id} className="gap- flex flex-col">
                <Card car={car} />
                {userAuth && userAuth.id === user.id && (
                  <div className="flex gap-4">
                    <Button color="black" size="secondary" variant="outlined" type="button">
                      Editar
                    </Button>
                    <div className="max-w-[160px]">
                      <Button
                        color="black"
                        size="secondary"
                        variant="outlined"
                        type="button"
                        fullWidth>
                        Ver detalhes
                      </Button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AdvertiserMain;
