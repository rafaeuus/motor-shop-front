"use client";

import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import { IauthContext, IauthProviderProps, TmodalTypes } from "./types";

export const AuthContext = createContext({} as IauthContext);
export const AuthProvider = ({ children }: IauthProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<TmodalTypes>("filterHomePage");
  const [modalTitle, setModalTitle] = useState("Modal Title");
  const router = useRouter();

  const openModal = (type: TmodalTypes, modalTitle: string) => {
    setModalType(type);
    setModalTitle(modalTitle);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AuthContext.Provider value={{ modalIsOpen, modalType, openModal, closeModal, modalTitle }}>
      {children}
    </AuthContext.Provider>
  );
};
