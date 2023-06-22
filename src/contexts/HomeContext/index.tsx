"use client";

import { api } from "@/services/api";
import { createContext, useEffect, useState } from "react";
import { IhomeContext, IhomeContextProps, IListAnnoucementsFilter, TFilterRequest } from "./types";

export const HomeContext = createContext({} as IhomeContext);
export const HomeProvider = ({ children, listAnnoucementsServer }: IhomeContextProps) => {
  const [listAnnoucements, setListAnnoucements] =
    useState<IListAnnoucementsFilter>(listAnnoucementsServer);

  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({} as TFilterRequest);

  const retrieveCars = async () => {
    const queryParams = new URLSearchParams({ ...inputValues });
    try {
      console.log(queryParams);
      const response = await api<IListAnnoucementsFilter>(`/filters?${queryParams}`);
      const { data } = response;
      console.log(data);
      setListAnnoucements(data);
    } catch (error) {
      console.log(error);
    }
  };

  const requestClearFilter = async () => {
    try {
      const response = await api<IListAnnoucementsFilter>(`/filters`);
      const { data } = response;
      console.log(data);
      setListAnnoucements(data);
    } catch (error) {
      console.log(error);
    }
  };

  const clearFilter = () => {
    setInputValues({});
    console.log("neto");
    requestClearFilter();
  };

  useEffect(() => {
    if (Object.keys(inputValues).length > 0) {
      retrieveCars();
    }
  }, [inputValues]);

  return (
    <HomeContext.Provider
      value={{ listAnnoucements, setListAnnoucements, inputValues, setInputValues, clearFilter }}>
      {children}
    </HomeContext.Provider>
  );
};
