"use client";

import Input from "@/Components/Input";
import Select from "@/Components/Select";
import TextArea from "@/Components/TextArea";
import { ModalContext } from "@/contexts/ModalContext.tsx";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { createCarSchema, ICarsCreate } from "./createCar.schema";

interface EnumValuesType {
  [index: number]: string;
}

export const ModalCreateCar = () => {
  const [brandApi, setBrandApi] = useState<string[]>([]);
  const [selectBrand, setSelectBrand] = useState("");
  const [modelApi, setModelApi] = useState<
    { name: string; year: string; fuel: number; value: number; price: number }[]
  >([]);
  const [selectModelDisabled, setSelectModelDisabled] = useState(true);
  const [selectModelValue, setSelectModelValue] = useState("");
  const [valuesModel, setValuesModel] = useState<
    { name: string; year: string; fuel: number; value: number }[]
  >([]);
  const [inputCount, setInputCount] = useState<number>(1);

  const { closeModal } = useContext(ModalContext);

  const {
    register,
    trigger,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
    formState
  } = useForm<ICarsCreate>({
    resolver: zodResolver(createCarSchema)
  });

  const { isSubmitted } = formState;

  const carSubmit = async (data: ICarsCreate) => {
    try {
      const cookies = parseCookies();
      const token = cookies["@motors-shop:token"];
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.post("/cars", data);
      console.log(response);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getBrand = async () => {
      const response = await fetch("https://kenzie-kars.herokuapp.com/cars");
      const data = await response.json();
      setBrandApi(Object.keys(data));
    };
    getBrand();
  }, []);

  useEffect(() => {
    const getModel = async () => {
      const response = await fetch(`https://kenzie-kars.herokuapp.com/cars?brand=${selectBrand}`);
      const data = await response.json();
      setModelApi(Object.values(data));
    };
    getModel();
  }, [selectBrand]);

  const handleBrandChange = (event: any) => {
    setSelectBrand(event.target.value);
    setValuesModel([{ fuel: 0, value: 0, year: "", name: "" }]);
    if (event.target.value === "") {
      setSelectModelDisabled(true);
      setSelectModelValue("");
      setValuesModel([{ fuel: 0, value: 0, year: "", name: "" }]);
    } else {
      setSelectModelDisabled(false);
    }
  };

  const handleModelChange = (event: any) => {
    setSelectModelValue(event.target.value);
    const selectedModel = modelApi.find((model) => model.name === event.target.value);
    setValuesModel([{ fuel: 0, value: 0, year: "", name: "" }]);
    if (selectedModel) {
      setValuesModel([selectedModel]);
    }
  };

  const handleModelChangeWrapper = (event: any) => {
    handleModelChange(event);
    setSelectModelValue(event.target.value);
  };

  const handleAddInput = () => {
    setInputCount(inputCount + 1);
  };

  const EnumValues: EnumValuesType = {
    0: selectModelValue != "" ? "ETANOL" : "",
    1: "FLEX",
    2: "HIBRIDO",
    3: "ELETRICO"
  };

  useEffect(() => {
    setValue("year", valuesModel[0]?.year);
    trigger("year");
  }, [valuesModel[0]?.year, setValue]);

  useEffect(() => {
    setValue("fipePrice", valuesModel[0]?.value);
    trigger("fipePrice");
  }, [valuesModel[0]?.value, setValue]);

  useEffect(() => {
    setValue("fuelType", EnumValues[valuesModel[0]?.fuel]);
    trigger("fuelType");
  }, [valuesModel[0]?.fuel, setValue]);

  return (
    <div className=" h-fit max-h-[80vh] w-full overflow-auto ">
      <p className="prose-body-2-500 mb-5">Informações do veículo</p>
      <form onSubmit={handleSubmit(carSubmit)} className="mb-5 flex flex-col gap-2">
        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <Select
              label="Marca"
              error={isSubmitted ? errors.brand?.message : undefined}
              {...field}
              onChange={(e) => {
                handleBrandChange(e);
                field.onChange(e);
              }}>
              {brandApi.map((brand, index) => {
                return <option key={index}>{brand}</option>;
              })}
            </Select>
          )}
        />
        <Controller
          name="model"
          control={control}
          render={({ field }) => (
            <Select
              label="Modelo"
              error={isSubmitted ? errors.model?.message : undefined}
              disabled={selectModelDisabled}
              {...field}
              onChange={(e) => {
                handleModelChangeWrapper(e);
                field.onChange(e);
              }}>
              {modelApi.length > 0 &&
                modelApi.map((model, index) => {
                  return <option key={index}>{model.name}</option>;
                })}
            </Select>
          )}
        />
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-5">
            <Input
              label="Ano"
              type="text"
              disabled={true}
              value={valuesModel[0]?.year || ""}
              register={register("year")}
              error={isSubmitted ? errors.year?.message : undefined}
              placeholder="Ex: 2018"
            />
            <Input
              label="Combustível"
              type="text"
              disabled={true}
              value={EnumValues[valuesModel[0]?.fuel] || ""}
              register={register("fuelType")}
              placeholder="Ex: Gasolina"
              error={isSubmitted ? errors.fuelType?.message : undefined}
            />
          </div>
          <div className="flex gap-5">
            <Input
              label="Quilometragem"
              type="number"
              register={register("mileage", { valueAsNumber: true })}
              onChange={(event) => setValue("mileage", Number(event.target.value))}
              error={isSubmitted ? errors.mileage?.message : undefined}
              placeholder="KM 0.0"
            />
            <Input
              label="Cor"
              type="text"
              register={register("color")}
              error={isSubmitted ? errors.color?.message : undefined}
              onChange={(event) => setValue("color", event.target.value)}
              placeholder="Digite uma cor"
            />
          </div>

          <div className="flex gap-5">
            <Input
              label="Preço tabela FIPE"
              type="number"
              disabled={true}
              value={valuesModel[0]?.value || ""}
              register={register("fipePrice")}
              error={isSubmitted ? errors.fipePrice?.message : undefined}
              placeholder="R$ 0.00"
            />
            <Input
              label="Preço"
              type="number"
              onChange={(event) => setValue("price", Number(event.target.value))}
              register={register("price", { valueAsNumber: true })}
              error={isSubmitted ? errors.price?.message : undefined}
              placeholder="R$ 0.00"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <TextArea
            label="Descrição"
            onChange={(event) => setValue("description", event.target.value)}
            register={register("description")}
            error={isSubmitted ? errors.description?.message : undefined}
            placeholder="Digite sua descrição..."
          />
          <Input
            label="Imagem da capa"
            type="url"
            register={register("coverImage")}
            onChange={(event) => setValue("coverImage", event.target.value)}
            error={isSubmitted ? errors.coverImage?.message : undefined}
            placeholder="https://..."
          />
          {Array.from(Array(inputCount).keys()).map((index) => {
            return (
              <Input
                key={index}
                label={`${index + 1}° da galeria`}
                type="url"
                register={register(`url.${index}`)}
                onChange={(event) => setValue(`url.${index}`, event.target.value)}
                error={isSubmitted ? errors.coverImage?.message : undefined}
                placeholder="https://..."
              />
            );
          })}

          <button
            type="button"
            onClick={handleAddInput}
            className="w-full max-w-[315px]  rounded border-Brand4 bg-Brand4 px-3 py-3 text-sm font-semibold text-Brand1">
            Adicionar campo para imagem da galeria
          </button>
        </div>

        <div className="mt-9 flex justify-end gap-3">
          <button
            className="w-auto rounded border-grey6 bg-grey6 px-5 py-3 text-base font-semibold text-grey2"
            type="button"
            onClick={closeModal}>
            Cancelar
          </button>
          <button
            className="w-auto rounded border-Brand3 bg-Brand3 px-5 py-3 text-base font-semibold text-Brand4"
            type="submit">
            Criar anúncio
          </button>
        </div>
      </form>
    </div>
  );
};
