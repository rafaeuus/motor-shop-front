import { IcarAnnouncement } from "@/Components/Card";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IannouncementContext {
  cars: IcarAnnouncement[];
  setCars: Dispatch<SetStateAction<IcarAnnouncement[]>>;
}

export interface IannouncementProviderProps {
  children: ReactNode;
  listCars: IcarAnnouncement[];
}
