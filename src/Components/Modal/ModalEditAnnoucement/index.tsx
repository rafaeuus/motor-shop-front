import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";
import { AnnouncementContext } from "@/contexts/AnnouncementContext";
import { ModalContext } from "@/contexts/ModalContext.tsx";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { editCarSchema, ICarsEdit } from "./schema";

export const ModalEditAnnoucement = () => {
  const [loading, setLoading] = useState(false);
  const { editAnnoucementModal, setEditAnnoucementModal, setCars } =
    useContext(AnnouncementContext);
  const { closeModal, openModal } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<ICarsEdit>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(editCarSchema),
    defaultValues: {
      brand: editAnnoucementModal?.brand,
      model: editAnnoucementModal?.model,
      year: editAnnoucementModal?.year,
      fuelType: editAnnoucementModal?.fuelType,
      mileage: editAnnoucementModal?.mileage,
      color: editAnnoucementModal?.color,
      fipePrice: editAnnoucementModal?.fipePrice,
      price: editAnnoucementModal?.price,
      description: editAnnoucementModal?.description,
      coverImage: editAnnoucementModal?.coverImage
    }
  });

  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "links"
  });

  // Adiciona um novo input de url de imagem do carro
  const addNewUrlLinks = () => {
    append({
      url: ""
    });
  };
  // Remove um input especifico de imagem do carro, porém obriga que sempre exista ao menos 1 input ativo.
  const removeUrlLinks = (index: number) => {
    if (fields.length > 1) remove(index);
  };

  // Adiciona os inputs de url de imagem do carro já cadastrados
  useEffect(() => {
    console.log(editAnnoucementModal);
    editAnnoucementModal?.carImages.map((item) => {
      prepend({
        url: item.url
      });
    });
  }, []);

  const formSubmit = async (data: ICarsEdit) => {
    const { links, ...formEditUser } = data;
    try {
      const respondeUpdateAnnoucement = await api.patch(
        `/cars/${editAnnoucementModal?.id}`,
        formEditUser
      );
      console.log(respondeUpdateAnnoucement);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-fit max-h-[80vh] w-full flex-col gap-6 overflow-auto">
      <h5 className="prose-body-2-500">Informações do veículo</h5>

      <form onSubmit={handleSubmit(formSubmit)} noValidate={true} className="flex flex-col gap-2">
        <Input
          label="Marca"
          type="text"
          placeholder="Escolha a marca"
          register={register("brand")}
          error={errors.brand?.message}
          disabled={true}
        />

        <Input
          label="Modelo"
          type="text"
          placeholder="Escolha o modelo"
          register={register("model")}
          error={errors.model?.message}
          disabled={true}
        />

        <div className="flex flex-col gap-2 ">
          <div className="flex gap-5">
            <Input
              label="Ano"
              type="text"
              placeholder="Escolha o ano"
              register={register("year")}
              error={errors.year?.message}
              disabled={true}
            />
            <Input
              label="Combustível"
              type="text"
              placeholder="Escolha o combustível"
              register={register("fuelType")}
              error={errors.fuelType?.message}
              disabled={true}
            />
          </div>
          <div className="flex gap-5">
            <Input
              label="Quilometragem"
              type="number"
              placeholder="KM 0.0"
              register={register("mileage")}
              error={errors.mileage?.message}
            />
            <Input
              label="Cor"
              type="text"
              placeholder="Digite uma cor"
              register={register("color")}
              error={errors.color?.message}
            />
          </div>
          <div className="flex gap-5">
            <Input
              label="Preço tabela FIPE"
              type="text"
              placeholder="R$ 0.00"
              register={register("fipePrice")}
              error={errors.fipePrice?.message}
              disabled={true}
            />
            <Input
              label="Preço"
              type="number"
              placeholder="R$ 0.00"
              register={register("price")}
              error={errors.price?.message}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <TextArea
            label="Descrição"
            register={register("description")}
            error={errors.description?.message}
            placeholder="Digite sua descrição..."
          />
          <Input
            label="Imagem da capa"
            type="text"
            register={register("coverImage")}
            error={errors.coverImage?.message}
            placeholder="https://..."
          />
        </div>

        <div className="flex flex-col gap-2">
          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                <div className="relative flex h-fit w-full  ">
                  <div className=" w-full ">
                    <Input
                      label={`${index + 1}° Imagem da galeria`}
                      type="text"
                      register={register(`links.${index}.url`)}
                      error={errors.links?.[index]?.url?.message}
                      placeholder="https://..."
                      formNoValidate
                    />
                  </div>
                  <div className="absolute right-0 top-1">
                    <button
                      type="button"
                      className="h-7 w-7 rounded  text-lg font-bold text-red-700"
                      onClick={() => removeUrlLinks(index)}>
                      X
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            type="button"
            onClick={addNewUrlLinks}
            className="w-full max-w-[315px]  rounded border-Brand4 bg-Brand4 px-3 py-3 text-sm font-semibold text-Brand1">
            Adicionar campo para imagem da galeria
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <button
            className="w-auto rounded border-grey6 bg-grey6 px-5 py-3 text-base font-semibold text-grey2 hover:bg-grey5"
            type="button"
            onClick={closeModal}>
            Cancelar
          </button>
          <button
            // onClick={() => {
            //   closeModal();
            //   openModal("deleteUser", "Excluir usuário");
            // }}
            type="button"
            className="w-auto rounded border-Alert2 bg-Alert2 px-5 py-3 text-base  font-semibold text-Alert1 hover:bg-Alert3">
            Excluir anúncio
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
