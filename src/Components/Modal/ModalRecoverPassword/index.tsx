"use client";

import Input from "@/Components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { IRecoverPassword, recoverPasswordSchema } from "./recoverPassword.schema";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { api } from "@/services/api";
import { toast } from "react-hot-toast";
import { ModalContext } from "@/contexts/ModalContext.tsx";
import { Spinner } from "@material-tailwind/react";

export const ModalRecoverPassword = () => {
  const [loading, setLoading] = useState(false);
  const { closeModal } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IRecoverPassword>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(recoverPasswordSchema)
  });

  const formSubmit = async (data: IRecoverPassword) => {
    setLoading(true);
    try {
      await api.post("/user/resetPassword", data);
      toast.success("Email de recuperação de senha enviado!", { duration: 3000 });
      closeModal();
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message, {
        duration: 3000
      });
    }
    setLoading(false);
  };

  return (
    <div className="flex h-fit max-h-[80vh] w-full flex-col gap-6 overflow-auto">
      <h5 className="prose-body-2-500">
        Digite o seu email cadastrado para enviarmos um formulário de recuperação de senha.
      </h5>
      <h5 className="prose-body-2-500">
        Caso não tenha recebido o email, verifique a caixa de spam, ou tente novamente mais tarde
      </h5>

      <form onSubmit={handleSubmit(formSubmit)} noValidate={true} className="flex flex-col gap-2">
        <Input
          label="Email"
          type="email"
          placeholder="Ex: joao@mail.com"
          register={register("email")}
          error={errors.email?.message}
        />
        <div className="mt-4 flex flex-col gap-4">
          <button
            type="submit"
            className="flex w-auto justify-center rounded border-Brand1 bg-Brand1 px-5 py-3 text-base  font-semibold text-grey10 hover:bg-Brand2"
            disabled={loading}>
            {loading ? <Spinner color="blue-gray" /> : "Entrar"}
          </button>
        </div>
      </form>
    </div>
  );
};
