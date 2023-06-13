import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TRegisterData, registerSchema } from "./schema";

type TAddressProps = {
  bairro: string;
  complemento: string;
  uf: string;
  logradouro: string;
  localidade: string;
};

export const useCep = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<TRegisterData>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(registerSchema)
  });
  console.log("0", watch("birthDate"));
  const cep = watch("zipCode");
  console.log("1", cep);
  const handleSetData = useCallback((data: TAddressProps) => {
    setValue("city", data.localidade);
    setValue("street", data.logradouro);
    setValue("state", data.uf);
    setValue("complement", data.complemento);
  }, []);

  const handleFetchAddress = useCallback(
    async (cep: string) => {
      try {
        console.log("2", cep);
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
        handleSetData(data);
        console.log("3", watch("city"));
      } catch (error) {
        console.error(error);
      }
    },
    [handleSetData, cep]
  );

  const formSubmit: SubmitHandler<TRegisterData> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setValue("zipCode", cep);

    if (cep && cep.length !== 9) {
      return;
    }
    handleFetchAddress(cep);
  }, [handleFetchAddress]);

  return {
    errors,
    register,
    handleSubmit,
    formSubmit
  };
};
