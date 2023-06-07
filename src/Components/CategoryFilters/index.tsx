"use client";
import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import MobileDialog from "./MobileDialog";
import MainFilter from "./MainFilter";
import { ModelOption, Option, filters, models } from "@/constants/filters";
import FilterFormMobile from "./FilterFormMobile";
import FilterFormScreen from "./FilterFormScreen";

interface CategoryFiltersProps {
  children: ReactNode;
}

const CategoryFilters = ({ children }: CategoryFiltersProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [model, setModel] = useState("");
  console.log(model);

  const filteredModels: ModelOption[] = models.options.filter((e) => e.label === model);

  const modelsList: Option[] = filteredModels.length > 0 ? filteredModels[0].options : [];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, sectionId: string) => {
    const newInputValues = { ...inputValues };
    newInputValues[sectionId] = e.target.value;
    setInputValues(newInputValues);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Valores capturados:", inputValues);
    //  lógica do envío do formulario
  };

  return (
    <div className="bg-grey9">
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
          <div className="lg:col-span-3">{children}</div>
        </MainFilter>
      </div>
    </div>
  );
};

export default CategoryFilters;
