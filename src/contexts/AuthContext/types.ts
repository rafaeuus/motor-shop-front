import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IauthContext {
  userAuth: TinfosToken;
  setUserAuth: Dispatch<SetStateAction<TinfosToken>>;
  logoutUserAuth: () => void;
  userProfile: UserProfile | undefined;
  setUserProfile: Dispatch<SetStateAction<UserProfile | undefined>>;
}

export interface IauthProviderProps {
  children: ReactNode;
  decodedToken: TinfosToken;
}

export interface IloginUser {
  token: string;
}

export type TinfosToken =
  | {
      id: string;
      name: string;
      isAdvertiser: boolean;
    }
  | undefined;

export interface IdecodedToken {
  name: string;
  isDeleted: boolean;
  isAdvertiser: boolean;
  iat: number;
  exp: number;
  sub: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: Date;
  isAdvertiser: boolean;
  createdAt: Date;
  updatedAt: Date;
  address: {
    id: string;
    zipCode: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
  description: string;
}
