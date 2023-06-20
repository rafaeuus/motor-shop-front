"use client";

import { Button } from "@/Components/Button";
import Input from "@/Components/Input";
import { AuthContext } from "@/contexts/AuthContext";
import { IdecodedToken, IloginUser, TinfosToken, UserProfile } from "@/contexts/AuthContext/types";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@material-tailwind/react";
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { ILoginForm, loginSchema } from "./loginSchema";
import { ModalContext } from "@/contexts/ModalContext.tsx";

const LoginPage = () => {
  const { setUserAuth, setUserProfile } = useContext(AuthContext);
  const { openModal } = useContext(ModalContext);
  const [loading, setLoading] = useState(false);
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

    setLoading(true);
    try {
      const response = await api.post<IloginUser>("/login", data);
      const { token } = response.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const responseProfile = await api.get<UserProfile>("/user");
      setUserProfile(responseProfile.data);
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
      toast.error("Email o senha errada, tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-3/4 justify-center bg-grey8 py-20">
      <div className="h-fit w-4/5 max-w-[600px] rounded bg-grey10 px-4 py-11 xs:px-12">
        <h2 className="prose-heading-5-500">Login</h2>
        <form onSubmit={handleSubmit(submitLogin)} className="mt-8 flex flex-col gap-5" noValidate>
          <Input
            register={register("email")}
            label="Email"
            type="email"
            placeholder="Digitar email"
            error={errors.email?.message}
            disabled={loading}
          />
          <Input
            register={register("password")}
            label="Password"
            type="password"
            placeholder="Digitar senha"
            error={errors.password?.message}
            disabled={loading}
          />
          <button
            onClick={() => openModal("recoverPassword", "Recuperar senha")}
            type="button"
            className="prose-body-2-500 flex cursor-pointer justify-end">
            Esqueci minha senha
          </button>
          <Button
            type="submit"
            variant="gradient"
            color="blue"
            size="primary"
            fullWidth={true}
            disabled={loading}>
            {loading ? <Spinner color="blue-gray" /> : "Entrar"}
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
