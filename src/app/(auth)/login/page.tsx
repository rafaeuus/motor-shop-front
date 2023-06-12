"use client";

import { Button } from "@/Components/Button";
import Input from "@/Components/Input";
import { AuthContext } from "@/contexts/AuthContext.tsx";
import { IdecodedToken, IloginUser, TinfosToken } from "@/contexts/AuthContext.tsx/types";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { ILoginForm, loginSchema } from "./loginSchema";

const LoginPage = () => {
  const { setUserAuth } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginForm>({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema)
  });

  const submitLogin: SubmitHandler<ILoginForm> = async (data): Promise<void> => {
    const toaster = toast.loading("Realizando login, aguarde!");

    try {
      const response = await api.post<IloginUser>("/login", data);
      const { token } = response.data;
      toast.dismiss(toaster);
      toast.success("Login realizado!");

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const decoded: IdecodedToken = jwt_decode(token!);
      const decodedToken: TinfosToken = {
        id: decoded.sub,
        isAdvertiser: decoded.isAdvertiser,
        name: decoded.name
      };
      setUserAuth(decodedToken);

      setCookie(undefined, "@motors-shop:token", token, {
        maxAge: 60 * 60 * 1
      });
      router.push("/");
    } catch (error: any) {
      console.log(error);
      toast.dismiss(toaster);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center bg-grey8 py-20">
      <div className="w-4/5 max-w-[600px] rounded bg-grey10 px-12 py-11">
        <h2 className="prose-heading-5-500">Login</h2>
        <form onSubmit={handleSubmit(submitLogin)} className="mt-8 flex flex-col gap-5" noValidate>
          <Input
            register={register("email")}
            label="Email"
            type="email"
            placeholder="Digitar email"
            error={errors.email?.message}
          />
          <Input
            register={register("password")}
            label="Password"
            type="password"
            placeholder="Digitar senha"
            error={errors.password?.message}
          />
          <Link className="prose-body-2-500 flex justify-end hover:scale-105" href={"/recover"}>
            Esqueci minha senha
          </Link>
          <Button type="submit" variant="gradient" color="blue" size="primary" fullWidth={true}>
            Entrar
          </Button>
        </form>
        <p className="my-8 w-full text-center">Ainda não possui conta?</p>
        <Link
          href={"/register"}
          className="prose-body-1-600 flex h-12 w-auto items-center justify-center rounded border-2 border-gray-400 px-7 text-grey2 hover:bg-grey8">
          Cadastrar
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
