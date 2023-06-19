"use client";

import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { destroyCookie, parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";
import { IauthContext, IauthProviderProps, TinfosToken, UserProfile } from "./types";

export const AuthContext = createContext({} as IauthContext);
export const AuthProvider = ({ children, decodedToken }: IauthProviderProps) => {
  const [userAuth, setUserAuth] = useState<TinfosToken>(decodedToken);
  const [userProfile, setUserProfile] = useState<UserProfile>();

  const requestUserProfile = async () => {
    const { data } = await api.get<UserProfile>("/user");
    setUserProfile(data);
  };

  useEffect(() => {
    if (userAuth) {
      const cookies = parseCookies();
      const token = cookies["@motors-shop:token"];
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      requestUserProfile();
    }
  }, []);

  const router = useRouter();

  const logoutUserAuth = () => {
    api.defaults.headers.common.authorization = `Bearer`;
    destroyCookie(null, "@motors-shop:token");

    router.push("/");
    setUserAuth(undefined);
    setUserProfile(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        userAuth,
        setUserAuth,
        logoutUserAuth,
        userProfile,
        setUserProfile
      }}>
      {children}
    </AuthContext.Provider>
  );
};
