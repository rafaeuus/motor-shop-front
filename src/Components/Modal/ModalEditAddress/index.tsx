"use client";
import Input from "@/Components/Input";
import { ModalContext } from "@/contexts/ModalContext.tsx";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IEditAddress, editAddressSchema } from "./editAddress.schema";
import { useMasks } from "@/hooks/useMasks";
import { AuthContext } from "@/contexts/AuthContext";

type TAddressProps = {
  bairro: string;
  complemento: string;
  uf: string;
  logradouro: string;
  localidade: string;
  cep: string;  
};

export const ModalEditAddress = () => {

  const {closeModal} = useContext(ModalContext)
  const {userProfile, setUserProfile} = useContext(AuthContext)
  const {zipCodeMask} = useMasks();

  const [cepInfo, setCepInfo] = useState({} as TAddressProps)

  const {register, handleSubmit, reset, setValue, formState: {errors}, clearErrors} = useForm<IEditAddress>({
    resolver: zodResolver(editAddressSchema),
    mode: "onChange"
  })

  const editAddress = async (data: IEditAddress) => {
    data.zipCode = data.zipCode?.replace(/\D/g, "")
    try {
      const cookies = parseCookies();
      const token = cookies["@motors-shop:token"];
      api.defaults.headers.common.authorization = `Bearer ${token}`; 
      const response = await api.patch("/user", {...data})
      setUserProfile(response.data)
      closeModal()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(userProfile?.address){
      reset({
        zipCode: zipCodeMask(userProfile?.address.zipCode),
        city: userProfile?.address.city,
        street: userProfile?.address.street,
        state: userProfile?.address.state,
        number: userProfile?.address.number,
        complement: userProfile?.address.complement
      })
    }
  }, [userProfile?.address])

  const handleZipCode: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;
    input.value = zipCodeMask(input.value);
  };

  const checkCEP = (value: string) => {
    const cep = value.replace(/\D/g, "")
    if(cep.length === 8){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json()).then(data => {
        if (!data.erro) {
          setCepInfo(data)
          clearErrors("state")
          clearErrors("city")
          clearErrors("street")
        }
      })
    }
  }

  const handleKeyUp = (event: any) => {
    if(event){
      setValue("number", "")
      setValue("complement", "")
      setValue("state", "")
      setValue("city", "")
      setValue("street", "")
    }
    checkCEP(event.target.value)
    handleZipCode(event)
  }

  useEffect(() => {
    setValue("state", cepInfo.uf)
    setValue("city", cepInfo.localidade)
    setValue("street", cepInfo.logradouro)
  }, [cepInfo])

  return (
    <div className="h-fit max-h-[80vh] w-full overflow-auto">
      <h2 className="prose-body-2-500 mb-5">Informações de endereço</h2>
      <form onSubmit={handleSubmit(editAddress)} className="mb-5 flex flex-col gap-2">
          <Input
            label="CEP"
            type="text"
            placeholder="00000.000"
            maxLength={9}
            onKeyUp={handleKeyUp}
            register={register("zipCode")}
            error={errors.zipCode?.message}
          />  
        <div className="flex gap-3">
          <Input
            label="Estado"
            type="text"
            placeholder="Digitar Estado"
            register={register("state")}
            error={errors.state?.message}
          />
          <Input
            label="Cidade"
            type="text"
            placeholder="Digitar Cidade"
            register={register("city")}
            error={errors.city?.message}
          />
        </div>
        <Input
          label="Rua"
          type="text"
          placeholder="Digitar Rua"
          register={register("street")}
          error={errors.street?.message}
        />
        <div className="flex gap-3">
          <Input
            label="Número"
            type="text"
            placeholder="Digitar Número"
            register={register("number", {
              shouldUnregister: false
            })}
            error={errors.number?.message}
          />
          <Input
            label="Complemento"
            type="text"
            placeholder="Ex: apart 307"
            register={register("complement", {
              shouldUnregister: false
            })}
          />
        </div>
        <div className="mt-9 flex justify-end gap-3">
          <button 
              className="w-auto rounded border-grey6 bg-grey6 px-5 py-3 text-base font-semibold text-grey2"
              type="button" onClick={() => reset({
              zipCode: zipCodeMask(userProfile?.address.zipCode!),
              city: userProfile?.address.city,
              street: userProfile?.address.street,
              state: userProfile?.address.state,
              number: userProfile?.address.number,
              complement: userProfile?.address.complement})}>Cancelar
            </button>
          <button 
          className="w-auto rounded border-Brand3 bg-Brand3 px-5 py-3 text-base font-semibold text-Brand4"
          type="submit">Salvar Alterações</button>
        </div>
      </form>
    </div>
  );
};