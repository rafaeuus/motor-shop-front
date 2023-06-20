"use client";

import Input from "@/Components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { IRecoverPassword, recoverPasswordSchema } from "./recoverPassword.schema";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { ModalContext } from "@/contexts/ModalContext.tsx";

export const ModalRecoverPassword = () => {
  const [loading, setLoading] = useState(false);
  const { closeModal } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IRecoverPassword>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(recoverPasswordSchema)
  });

  const formSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);

    console.log("oi");
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
            className="w-auto rounded border-grey6 bg-grey6 px-5 py-3 text-base font-semibold text-grey2 hover:bg-grey5"
            type="button"
            onClick={closeModal}>
            Cancelar
          </button>
          <button
            type="submit"
            className="w-auto rounded border-Brand1 bg-Brand1 px-5 py-3 text-base  font-semibold text-grey10 hover:bg-Brand2"
            disabled={loading}>
            {loading ? "Carregando..." : " Recuperar Senha"}
          </button>
        </div>
      </form>
    </div>
  );
};
