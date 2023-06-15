"use client";

import { ModalContext } from "@/contexts/ModalContext.tsx";
import Image from "next/image";
import { useContext } from "react";
import Modal from "react-modal";
import FilterForm from "../CategoryFilters/FilterForm";
import { ModalImageCar } from "./ModalImageCar";
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
  const { closeModal, modalIsOpen, modalTitle, modalType } = useContext(ModalContext);
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
            <div className="h-[60vh]  w-full  overflow-auto">
              <FilterForm show={true} />
            </div>
          )}
          {modalType == "imageCar" && <ModalImageCar />}
        </div>
      </div>
    </Modal>
  );
};
