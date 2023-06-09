"use client";
import { AuthContext } from "@/contexts/AuthContext.tsx";
import { ReactNode, useContext } from "react";
import { Button } from "../Button";
import FilterForm from "./FilterForm";
import Pagination from "./Pagination";

interface CategoryFiltersProps {
  children: ReactNode;
}

const CategoryFilters = ({ children }: CategoryFiltersProps) => {
  const { openModal } = useContext(AuthContext);

  return (
    <section className="bg-grey10">
      <main className="mx-auto w-full px-4">
        <section className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {" "}
            <FilterForm />
            {/* Product grid  flex h-max  gap-2 overflow-x-auto  p-4 md:grid md:h-[100%]  md:grid-cols-2 md:gap-4 md:overflow-hidden lg:grid-cols-3*/}
            <div className=" lg:col-span-3">
              <div className="flex h-max  gap-2 overflow-x-auto  p-4 md:flex-wrap md:justify-around">
                {children}
              </div>
              <div className=" mt-16 flex content-center justify-center lg:hidden ">
                <Button
                  fullWidth={true}
                  color="blue"
                  size="primary"
                  variant="gradient"
                  onClick={() => openModal("filterHomePage", "FilterModal")}>
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

export default CategoryFilters;
