"use-client";

import Image from "next/image";
import { Button } from "@/Components/Button";
import TextArea from "@/Components/TextArea";
import AnnouncerCard from "@/Components/AnnouncerCard";
import Comment from "@/Components/Comment";

export const AnnouncementsMain = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-Brand1 from-30% via-grey8 via-30% to-grey8 to-100% pb-[73px] pt-[40px]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4">
        <div className="flex w-full flex-wrap justify-between gap-3.5 [@media(min-width:1000px)]:flex-nowrap">
          <div className="flex w-full max-w-full flex-col gap-8 [@media(min-width:1000px)]:max-w-3xl">
            <div className="flex flex-col gap-5">
              <div className="flex h-[355px] w-full max-w-full justify-center rounded bg-grey10 object-contain xl:max-w-3xl">
                <Image
                  width={200}
                  height={200}
                  className="h-auto w-auto bg-transparent object-contain"
                  src={"/assets/carExample.png"}
                  alt="Imagem do veículo"
                  priority
                />
              </div>
              <div className="flex flex-col gap-9 rounded bg-grey10 px-5 pb-8 pt-11">
                <h1 className="prose-heading-6-600">
                  Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
                </h1>
                <div className="flex flex-wrap items-center justify-between gap-9 gap-x-24">
                  <div className="flex gap-3">
                    <span className="prose-body-2-600  rounded bg-Brand4 px-2 py-1 text-Brand1">
                      0 KM
                    </span>
                    <span className="prose-body-2-600  rounded bg-Brand4 px-2 py-1 text-Brand1">
                      2019
                    </span>
                  </div>
                  <span className="prose-heading-7-500">R$ 00.000,00</span>
                </div>
                <Button variant={"gradient"} color={"blue"} size={"secondary"}>
                  Comprar
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-8 rounded bg-grey10 px-5 pb-8 pt-11">
              <span className="prose-heading-6-600 text-grey1">Descrição</span>
              <p className="prose-body-1-400 text-grey2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat adipisci
                molestias dolore fuga corporis, quo reiciendis aliquid temporibus facilis doloremque
                pariatur velit modi amet porro. At velit repellendus dolor.
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-full flex-col gap-8 [@media(min-width:1000px)]:max-w-md">
            <div className="flex flex-col gap-8 rounded bg-grey10 px-5 pb-8 pt-9">
              <span className="prose-heading-6-600 text-grey1">Fotos</span>
              <div className="grid max-h-52 grid-cols-3 gap-x-3.5 gap-y-8 overflow-y-scroll">
                <Image
                  width={200}
                  height={200}
                  className="h-auto w-auto bg-grey7 object-contain"
                  src={"/assets/carExample.png"}
                  alt="Imagem do veículo"
                />
                <Image
                  width={200}
                  height={200}
                  className="h-auto w-auto bg-grey7 object-contain"
                  src={"/assets/carExample.png"}
                  alt="Imagem do veículo"
                />
                <Image
                  width={200}
                  height={200}
                  className="h-auto w-auto bg-grey7 object-contain"
                  src={"/assets/carExample.png"}
                  alt="Imagem do veículo"
                />
                <Image
                  width={200}
                  height={200}
                  className="h-auto w-auto bg-grey7 object-contain"
                  src={"/assets/carExample.png"}
                  alt="Imagem do veículo"
                />
                <Image
                  width={200}
                  height={200}
                  className="h-auto w-auto bg-grey7 object-contain"
                  src={"/assets/carExample.png"}
                  alt="Imagem do veículo"
                />
                <Image
                  width={200}
                  height={200}
                  className="h-auto w-auto bg-grey7 object-contain"
                  src={"/assets/carExample.png"}
                  alt="Imagem do veículo"
                />
                <Image
                  width={200}
                  height={200}
                  className="h-auto w-auto bg-grey7 object-contain"
                  src={"/assets/carExample.png"}
                  alt="Imagem do veículo"
                />
                <Image
                  width={200}
                  height={200}
                  className="h-auto w-auto bg-grey7 object-contain"
                  src={"/assets/carExample.png"}
                  alt="Imagem do veículo"
                />
                <Image
                  width={200}
                  height={200}
                  className="h-auto w-auto bg-grey7 object-contain"
                  src={"/assets/carExample.png"}
                  alt="Imagem do veículo"
                />
                <Image
                  width={200}
                  height={200}
                  className="h-auto w-auto bg-grey7 object-contain"
                  src={"/assets/carExample.png"}
                  alt="Imagem do veículo"
                />
                <Image
                  width={200}
                  height={200}
                  className="h-auto w-auto bg-grey7 object-contain"
                  src={"/assets/carExample.png"}
                  alt="Imagem do veículo"
                />
                <Image
                  width={200}
                  height={200}
                  className="h-auto w-auto bg-grey7 object-contain"
                  src={"/assets/carExample.png"}
                  alt="Imagem do veículo"
                />
              </div>
            </div>
            <AnnouncerCard
              user={{
                name: "Rafael",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat quaerat, aspernatur ab debitis pariatur dignissimos fuga, error aperiam tenetur exercitationem reiciendis laborum expedita qui. Dolorem iusto maxime quaerat itaque?"
              }}
            />
          </div>
        </div>
        <div className="flex w-full max-w-full flex-col gap-8 [@media(min-width:1000px)]:max-w-3xl">
          <div className="flex flex-col gap-6 rounded bg-grey10 px-5 py-9">
            <span className="prose-heading-6-600">Comentários</span>
            <ul className="flex flex-col gap-11">
              <Comment
                user={{
                  name: "Testando",
                  comment:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                  createdAt: new Date("2023-01-01")
                }}
              />
              <Comment
                user={{
                  name: "Testando",
                  comment:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                  createdAt: new Date("2023-04-03")
                }}
              />
            </ul>
          </div>
          <div className="flex flex-col gap-4 rounded bg-grey10 px-5 py-9">
            <div className="flex items-center gap-2">
              <span className="prose-body-2-600 flex h-8 w-8 items-center justify-center rounded-full bg-Brand2 text-grey10">
                R
              </span>
              <span className="prose-body-2-600 text-grey2">Comentar Com</span>
            </div>
            <div className="relative">
              <TextArea
                rows={4}
                placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
              />
              <div className="absolute bottom-3 right-3">
                <Button variant={"gradient"} color={"blue"} size={"secondary"} fullWidth={true}>
                  Comentar
                </Button>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2">
              <li>
                <button className="prose-body-2-600 rounded-full bg-grey7 px-3 py-1 text-xs text-grey3 transition hover:bg-grey6">
                  Gostei muito!
                </button>
              </li>
              <li>
                <button className="prose-body-2-600 rounded-full bg-grey7 px-3 py-1 text-xs text-grey3 transition hover:bg-grey6">
                  Incrível
                </button>
              </li>
              <li>
                <button className="prose-body-2-600 rounded-full bg-grey7 px-3 py-1 text-xs text-grey3 transition hover:bg-grey6">
                  Recomendarei para meus amigos!
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
