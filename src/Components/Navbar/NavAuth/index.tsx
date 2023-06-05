interface InavAuthProps {
  toogleMenuAuth: () => void;
  menuAuthIsOpen: boolean;
  isAdvertiser: boolean;
}

export const NavAuth = ({ toogleMenuAuth, menuAuthIsOpen, isAdvertiser }: InavAuthProps) => {
  return (
    <div className="relative  flex h-20 items-center">
      <button className="h-12 w-auto rounded px-7 py-3  " onClick={toogleMenuAuth}>
        <div className="flex h-full items-center gap-2">
          <span className=" flex h-8 w-8 items-center justify-center rounded-full bg-Brand2 text-sm font-bold leading-none text-grey10">
            SL
          </span>
          <h4 className=" text-base font-normal leading-7 text-grey2">Samuel Leão</h4>
        </div>
      </button>
      {menuAuthIsOpen && (
        <nav className="absolute top-16 flex h-fit w-52 flex-col items-start justify-start gap-4 rounded bg-grey9 p-5 shadow-[0px_4px_40px_-10px_rgba(0,0,0,0.25)]">
          <button>Editar Perfil</button>
          <button>Editar endereço</button>
          {isAdvertiser && <button>Meus Anúncios</button>}
          <button>Sair</button>
        </nav>
      )}
    </div>
  );
};
