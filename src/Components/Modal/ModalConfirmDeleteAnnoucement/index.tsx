import { AnnouncementContext } from "@/contexts/AnnouncementContext";
import { ModalContext } from "@/contexts/ModalContext.tsx";
import { api } from "@/services/api";
import { useContext, useState } from "react";

export const ModalConfirmDeleteAnnoucement = () => {
  const [loading, setLoading] = useState(false);
  const { closeModal } = useContext(ModalContext);
  const { editAnnoucementModal, setCars } = useContext(AnnouncementContext);

  const deleteAnnoucement = async () => {
    try {
      setLoading(true);
      await api.delete(`/cars/${editAnnoucementModal?.id}`);
      setCars((oldList) => oldList.filter((item) => item.id !== editAnnoucementModal?.id));
      closeModal();
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className="flex h-fit w-full flex-col gap-5">
      <h3 className="prose-heading-7-500 text-grey1">
        Tem certeza que deseja remover este anúncio?
      </h3>
      <p className="prose-body-1-400 text-grey2">
        Essa ação não pode ser desfeita. Isso excluirá permanentemente seu anúncio e removerá os
        dados de nossos servidores.
      </p>
      <div className="mt-4 flex flex-col gap-4">
        <button
          className="w-auto rounded border-grey6 bg-grey6 px-5 py-3 text-base font-semibold text-grey2 hover:bg-grey5"
          type="button"
          onClick={closeModal}>
          Cancelar
        </button>
        <button
          disabled={loading}
          className="w-auto rounded border-Alert2 bg-Alert2 px-5 py-3 text-base  font-semibold text-Alert1 hover:bg-Alert3"
          onClick={deleteAnnoucement}>
          {loading ? "Excluindo..." : "Sim, excluir anúncio"}
        </button>
      </div>
    </div>
  );
};
