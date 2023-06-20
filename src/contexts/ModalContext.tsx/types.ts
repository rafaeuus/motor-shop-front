import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ImodalContext {
  modalIsOpen: boolean;
  modalType: TmodalTypes;
  openModal: (type: TmodalTypes, modalTitle: string) => void;
  closeModal: () => void;
  modalTitle: string;
  setModalImageCarUrl: Dispatch<SetStateAction<string>>;
  modalImageCarUrl: string;
}

export interface ImodalProviderProps {
  children: ReactNode;
}

export type TmodalTypes =
  | "filterHomePage"
  | "imageCar"
  | "createCar"
  | "sucessCreateCar"
  | "editUser"
  | "editAddress"
  | "sucessRegisterUser"
  | "recoverPassword"
  | "deleteUser";

