"use client";
import { Button } from "../Button";
import { AuthContext } from "@/contexts/AuthContext.tsx";
import FilterForm from "./FilterForm";
import Pagination from "./Pagination";
import { ReactNode, useContext } from "react";

interface CategoryFiltersProps {
  children: ReactNode;
}

const CategoryFilters = ({ children }: CategoryFiltersProps) => {
  const { openModal } = useContext(AuthContext);

  return (
    <section className="bg-grey10">
      <main className="mx-auto max-w-[1200px]">
        <section className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {" "}
            <FilterForm />
            {/* Product grid */}
            <div className="lg:col-span-3">
              <div className="grid h-[100%] grid-cols-1 gap-2 p-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 ">
                {children}
              </div>
              <div className="mb-4 flex content-center justify-center lg:hidden ">
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
