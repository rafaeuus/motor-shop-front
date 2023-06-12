import { ReactNode } from "react";

export interface IauthContext {
  modalIsOpen: boolean;
  modalType: TmodalTypes;
  openModal: (type: TmodalTypes, modalTitle: string) => void;
  closeModal: () => void;
  modalTitle: string;
}

export interface IauthProviderProps {
  children: ReactNode;
}

export type TmodalTypes = "filterHomePage" | "imageCar";

export interface IloginUser {
  token: string;
}
