import { IcarAnnouncement } from "@/Components/Card";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IannouncementContext {
  cars: IcarAnnouncement[];
  setCars: Dispatch<SetStateAction<IcarAnnouncement[]>>;
  editAnnoucementModal: IcarAnnouncement | undefined;
  setEditAnnoucementModal: Dispatch<SetStateAction<IcarAnnouncement | undefined>>;
}

export interface IannouncementProviderProps {
  children: ReactNode;
  listCars: IcarAnnouncement[];
}
