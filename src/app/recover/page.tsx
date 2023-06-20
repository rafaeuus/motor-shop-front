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
import { ModalContext } from "@/contexts/ModalContext.tsx";
import { IUpdatePasswordForm, updatePasswordSchema } from "./updatePasswordSchema";

const RecoverPage = () => {
  const { setUserAuth, setUserProfile } = useContext(AuthContext);
  const { openModal } = useContext(ModalContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUpdatePasswordForm>({
    mode: "onSubmit",
    resolver: zodResolver(updatePasswordSchema)
  });

  const submitUpdatePassword: SubmitHandler<IUpdatePasswordForm> = async (data): Promise<void> => {
    const toaster = toast.loading("Realizando login, aguarde!");
    setLoading(true);
    setTimeout(() => {
      toast.dismiss(toaster);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-3/4 justify-center bg-grey8 py-20">
      <div className="h-fit w-4/5 max-w-[600px] rounded bg-grey10 px-4 py-11 xs:px-12">
        <h2 className="prose-heading-5-500">Recuperar Senha</h2>
        <form
          onSubmit={handleSubmit(submitUpdatePassword)}
          className="mt-8 flex flex-col gap-5"
          noValidate>
          <Input
            register={register("password")}
            label="Senha"
            type="password"
            placeholder="Digitar senha"
            error={errors.password?.message}
            disabled={loading}
          />
          <Input
            register={register("confirmPassword")}
            label="Confirme a senha"
            type="password"
            placeholder="Digitar senha"
            error={errors.confirmPassword?.message}
            disabled={loading}
          />
          <Button
            type="submit"
            variant="gradient"
            color="blue"
            size="primary"
            fullWidth={true}
            disabled={loading}>
            {loading ? <Spinner color="blue-gray" /> : "Atualizar senha"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RecoverPage;
