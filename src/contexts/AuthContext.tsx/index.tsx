"use client";

import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import { createContext, useState } from "react";
import { IauthContext, IauthProviderProps, TinfosToken, TmodalTypes } from "./types";

export const AuthContext = createContext({} as IauthContext);
export const AuthProvider = ({ children, decodedToken }: IauthProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<TmodalTypes>("filterHomePage");
  const [modalTitle, setModalTitle] = useState("Modal Title");
  const [userAuth, setUserAuth] = useState<TinfosToken>(decodedToken);

  const router = useRouter();
  const openModal = (type: TmodalTypes, modalTitle: string) => {
    setModalType(type);
    setModalTitle(modalTitle);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const logoutUserAuth = () => {
    api.defaults.headers.common.authorization = `Bearer`;
    destroyCookie(null, "@motors-shop:token");

    router.push("/");
    setUserAuth(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        modalIsOpen,
        modalType,
        openModal,
        closeModal,
        modalTitle,
        userAuth,
        setUserAuth,
        logoutUserAuth
      }}>
      {children}
    </AuthContext.Provider>
  );
};
