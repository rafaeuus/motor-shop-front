"use client";

import { useRouter } from "next/navigation";
import { createContext } from "react";
import { IauthContext, IauthProviderProps } from "./types";

export const AuthContext = createContext({} as IauthContext);
export const AuthProvider = ({ children }: IauthProviderProps) => {
  const router = useRouter();

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
