import { ModalContext } from "@/contexts/ModalContext.tsx";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export const ModalSucessRegisterUser = () => {
  const { closeModal } = useContext(ModalContext);
  const router = useRouter();
  return (
    <div className="flex h-fit w-full flex-col gap-5">
      <h3 className="prose-heading-7-500 text-grey1">Sua conta foi criada com sucesso!</h3>
      <p className="prose-body-1-400 text-grey2">
        Agora você poderá ver seus negócios crescendo em grande escala
      </p>
      <button
        className="w-auto rounded border-Brand1 bg-Brand1 px-5 py-3 text-base  font-semibold text-grey10 hover:bg-Brand2"
        onClick={() => {
          router.push("/login");
          closeModal();
        }}>
        Ir para o login
      </button>
    </div>
  );
};
