"use client";

import { Button } from "@/Components/Button";
import Input from "@/Components/Input";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { IUpdatePasswordForm, updatePasswordSchema } from "./updatePasswordSchema";

interface IResetPageProps {
  params: { token: string };
}

const RecoverPage = ({ params }: IResetPageProps) => {
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
    setLoading(true);
    const toaster = toast.loading("Atualizando senha, aguarde!");
    const { password } = data;
    const { token } = params;

    try {
      await api.patch(`/user/resetPassword/${token}`, { password });
      toast.dismiss(toaster);
      toast.success("Senha atualizada com sucesso!");
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.dismiss(toaster);
      toast.error(error.message, {
        duration: 3000
      });
    }
    setLoading(false);
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
