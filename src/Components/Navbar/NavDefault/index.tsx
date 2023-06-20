import Link from "next/link";

interface InavDefaultProps {
  style: string;
  closeMenuBurguer: () => void;
}

export const NavDefault = ({ style, closeMenuBurguer }: InavDefaultProps) => {
  return (
    <nav className={style}>
      <Link
        onClick={closeMenuBurguer}
        href={"/login"}
        className="prose-body-1-600 flex  h-12  w-auto items-center  justify-center  rounded px-7 py-3  text-grey2 hover:bg-grey8"
        id="link-login-page">
        Fazer Login
      </Link>
      <Link
        onClick={closeMenuBurguer}
        href={"/register"}
        className="prose-body-1-600 flex h-12 w-auto items-center  justify-center rounded border-[1.5px] border-grey4 px-7 py-3 text-grey0 hover:border-grey1 hover:bg-grey1 hover:text-grey10"
        id="link-register-page">
        Cadastrar
      </Link>
    </nav>
  );
};
