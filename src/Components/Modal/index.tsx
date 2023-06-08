"use client";

import { AuthContext } from "@/contexts/AuthContext.tsx";
import Image from "next/image";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import FormMobile from "../CategoryFilters/FormModal";
import { ModelOption, filters, models, Option } from "@/constants/filters";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    maxWidth: "520px",
    borderRadius: "8px",
    padding: 0,
    backgroundColor: "#FFFFFF"
  }
};

export const ModalCustom = () => {
  // vai pro contexto, apenas pra teste:
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [model, setModel] = useState("");

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
  // ate aqui
  const { closeModal, modalIsOpen, modalTitle, modalType } = useContext(AuthContext);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}>
      <div className="flex flex-col gap-8 px-6 pb-8">
        <header className="2-full flex h-14 items-center justify-between">
          <h3 className="text-base font-medium leading-5 text-grey1">{modalTitle}</h3>
          <button onClick={closeModal}>
            <Image
              src={"/x-icon.svg"}
              width={24}
              height={24}
              alt={"close-button"}
              className="h-auto w-auto"
            />
          </button>
        </header>
        <div>
          {modalType == "filterHomePage" && (
            <div>
              <FormMobile
                filters={filters}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                inputValues={inputValues}
                setModel={setModel}
                modelsList={modelsList}
              />
            </div>
          )}
          {modalType == "imageCar" && <div> </div>}
        </div>
      </div>
    </Modal>
  );
};
