"use client";
import { ModalContext } from "@/contexts/ModalContext.tsx";
import { useContext, useEffect, useState } from "react";
import { Button } from "../Button";
import FilterForm from "./FilterForm";
import Pagination from "./Pagination";
import Card, { IcarAnnouncement } from "../Card";
import { api } from "@/services/api";
import { useCarsFilter } from "@/hooks/useCarsFilter";

export type TFilterRequest = {
  brand?: string;
  model?: string;
  year?: string;
  fueltype?: string;
  color?: string;
  minkms?: string;
  maxkms?: string;
  minprice?: string;
  maxprice?: string;
};

const CarsFilterComponent = () => {
  const { openModal } = useContext(ModalContext);
  // const { listCarsAnnouncement, setListCarsAnnouncement } = useCarsFilter();
  const [listCarsAnnouncement, setListCarsAnnouncement] = useState<IcarAnnouncement[]>([]);

  const getListCarsAnnouncement = async () => {
    try {
      const res = await api.get<IcarAnnouncement[]>("/cars");
      return setListCarsAnnouncement(res.data);
    } catch (error) {
      throw new Error("API sendo iniciada");
    }
  };

  useEffect(() => {
    getListCarsAnnouncement();
  }, []);

  return (
    <section className="bg-grey10">
      <main className="mx-auto w-full px-4">
        <section className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {" "}
            <FilterForm />
            <div className=" lg:col-span-3">
              <div className="flex h-max  gap-2 overflow-x-auto  p-4 md:flex-wrap md:justify-around">
                {listCarsAnnouncement.map((announcement) => (
                  <Card key={announcement.id} car={announcement} />
                ))}
              </div>
              <div className=" mt-16 flex content-center justify-center lg:hidden ">
                <Button
                  fullWidth={true}
                  color="blue"
                  size="primary"
                  variant="gradient"
                  onClick={() => openModal("filterHomePage", "Filtro")}>
                  Filtrar
                </Button>
              </div>
              <Pagination />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default CarsFilterComponent;
