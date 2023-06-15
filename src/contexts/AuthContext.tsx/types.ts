import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IauthContext {
  userAuth: TinfosToken;
  setUserAuth: Dispatch<SetStateAction<TinfosToken>>;
  logoutUserAuth: () => void;
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
