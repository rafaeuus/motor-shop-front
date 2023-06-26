"use client";

import { createContext, useState } from "react";
import { ImodalContext, ImodalProviderProps, TmodalTypes } from "./types";

export const ModalContext = createContext({} as ImodalContext);
export const ModalProvider = ({ children }: ImodalProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<TmodalTypes>("filterHomePage");
  const [modalTitle, setModalTitle] = useState("Modal Title");
  const [modalImageCarUrl, setModalImageCarUrl] = useState("");

  const openModal = (type: TmodalTypes, modalTitle: string) => {
    setModalType(type);
    setModalTitle(modalTitle);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        modalType,
        openModal,
        closeModal,
        modalTitle,
        modalImageCarUrl,
        setModalImageCarUrl
      }}>
      {children}
    </ModalContext.Provider>
  );
};
