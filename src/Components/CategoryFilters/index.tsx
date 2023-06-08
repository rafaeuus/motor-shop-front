"use client";
import { ChangeEvent, FormEvent, ReactNode, useContext, useState } from "react";
import MobileDialog from "./MobileDialog";
import MainFilter from "./MainFilter";
import { ModelOption, Option, filters, models } from "@/constants/filters";
import FilterFormMobile from "./FilterFormMobile";
import FilterFormScreen from "./FilterFormScreen";
import Pagination from "./Pagination";
import { Button } from "../Button";
import { AuthContext } from "@/contexts/AuthContext.tsx";

interface CategoryFiltersProps {
  children: ReactNode;
}

const CategoryFilters = ({ children }: CategoryFiltersProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [model, setModel] = useState("");
  const { openModal } = useContext(AuthContext);

  const filteredModels: ModelOption[] = models.options.filter((e) => e.label === model);

  const modelsList: Option[] = filteredModels.length > 0 ? filteredModels[0].options : [];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, sectionId: string) => {
    const newInputValues = { ...inputValues };
    newInputValues[sectionId] = e.target.value;
    setInputValues(newInputValues);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //  lógica do envío do formulario
  };

  return (
    <section className="bg-grey10">
      <div>
        {/* Mobile filter dialog */}
        <MobileDialog
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}>
          {/* Filters */}
          <FilterFormMobile
            filters={filters}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            inputValues={inputValues}
            setModel={setModel}
            modelsList={modelsList}
          />
        </MobileDialog>
        <MainFilter setMobileFiltersOpen={setMobileFiltersOpen}>
          <FilterFormScreen
            filters={filters}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            inputValues={inputValues}
            setModel={setModel}
            modelsList={modelsList}
          />
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
        </MainFilter>
      </div>
    </section>
  );
};

export default CategoryFilters;
