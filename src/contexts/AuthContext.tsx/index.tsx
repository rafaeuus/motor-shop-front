"use client";

import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import { createContext, useState } from "react";
import { IauthContext, IauthProviderProps, TinfosToken } from "./types";

export const AuthContext = createContext({} as IauthContext);
export const AuthProvider = ({ children, decodedToken }: IauthProviderProps) => {
  const [userAuth, setUserAuth] = useState<TinfosToken>(decodedToken);

  const router = useRouter();

  const logoutUserAuth = () => {
    api.defaults.headers.common.authorization = `Bearer`;
    destroyCookie(null, "@motors-shop:token");

    router.push("/");
    setUserAuth(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        userAuth,
        setUserAuth,
        logoutUserAuth
      }}>
      {children}
    </AuthContext.Provider>
  );
};
