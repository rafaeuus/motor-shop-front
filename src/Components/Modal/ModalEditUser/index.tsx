import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";
import { AuthContext } from "@/contexts/AuthContext";
import { UserProfile } from "@/contexts/AuthContext/types";
import { ModalContext } from "@/contexts/ModalContext.tsx";
import { useMasks } from "@/hooks/useMasks";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TupdateUser, updateSchema } from "./schema";

export const ModalEditUser = () => {
  const [loading, setLoading] = useState(false);
  const { CPFMask, phoneMask } = useMasks();
  const { userProfile, setUserProfile } = useContext(AuthContext);
  const { closeModal } = useContext(ModalContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TupdateUser>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(updateSchema),
    defaultValues: {
      name: userProfile?.name,
      email: userProfile?.email,
      cpf: CPFMask(userProfile!.cpf),
      phone: phoneMask(userProfile!.phone.slice(2)),
      birthDate: String(userProfile?.birthDate).split("T")[0],
      description: userProfile?.description
    }
  });

  const handleNumberPhone: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;
    input.value = phoneMask(input.value);
  };

  const handleCPF: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;
    input.value = CPFMask(input.value);
  };

  const formSubmit = async (data: TupdateUser) => {
    try {
      setLoading(true);
      const response = await api.patch<UserProfile>("/user", data);
      setUserProfile(response.data);
      closeModal();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-fit max-h-[80vh] w-full flex-col gap-6 overflow-auto">
      <h5 className="prose-body-2-500">Informações pessoais</h5>

      <form onSubmit={handleSubmit(formSubmit)} noValidate={true} className="flex flex-col gap-2">
        <Input
          label="Nome"
          type="text"
          placeholder="Ex: João da Silva"
          register={register("name")}
          error={errors.name?.message}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Ex: joao@mail.com"
          register={register("email")}
          error={errors.email?.message}
        />
        <Input
          label="CPF"
          type="text"
          placeholder="000.000.000-00"
          register={register("cpf")}
          error={errors.cpf?.message}
          maxLength={14}
          onKeyUp={handleCPF}
        />
        <Input
          label="Celular"
          type="tel"
          placeholder="(DDD) 00000-0000"
          register={register("phone")}
          error={errors.phone?.message}
          maxLength={15}
          onKeyUp={handleNumberPhone}
        />
        <Input
          label="Data de nascimento"
          type="date"
          register={register("birthDate")}
          error={errors.birthDate?.message}
        />
        <TextArea
          label="Descrição"
          placeholder="Ex: Sobre mim"
          register={register("description")}
          error={errors.description?.message}
        />
        <div className="mt-4 flex flex-col gap-4">
          <button
            className="w-auto rounded border-grey6 bg-grey6 px-5 py-3 text-base font-semibold text-grey2 hover:bg-grey5"
            type="button"
            onClick={closeModal}>
            Cancelar
          </button>
          <button
            type="button"
            className="w-auto rounded border-Alert2 bg-Alert2 px-5 py-3 text-base  font-semibold text-Alert1 hover:bg-Alert3">
            Excluir Perfil
          </button>

          <button
            type="submit"
            className="w-auto rounded border-Brand1 bg-Brand1 px-5 py-3 text-base  font-semibold text-grey10 hover:bg-Brand2"
            disabled={loading}>
            {loading ? "Carregando..." : " Salvar alterações"}
          </button>
        </div>
      </form>
    </div>
  );
};
