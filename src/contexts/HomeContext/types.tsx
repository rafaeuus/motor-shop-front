import { IcarAnnouncement } from "@/Components/Card";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IListAnnoucementsFilter {
  nextPage: string | null;
  prevPage: string | null;
  pages: number;
  items: number;
  data: IcarAnnouncement[];
}

export type TFilterRequest = {
  brand?: string;
  model?: string;
  year?: string;
  fueltype?: string;
  color?: string;
  minkm?: string;
  maxkm?: string;
  minprice?: string;
  maxprice?: string;
};

export interface IhomeContext {
  listAnnoucements: IListAnnoucementsFilter;
  setListAnnoucements: Dispatch<SetStateAction<IListAnnoucementsFilter>>;
  inputValues: {
    [key: string]: string;
  };
  setInputValues: Dispatch<
    SetStateAction<{
      [key: string]: string;
    }>
  >;
  clearFilter: () => void;
}

export interface IhomeContextProps {
  children: ReactNode;
  listAnnoucementsServer: IListAnnoucementsFilter;
}
