import { ModalCustom } from "@/Components/Modal";
import { ModalProvider } from "@/contexts/ModalContext.tsx";

export const metadata = {
  title: "Motor-Shop",
  description: "Loja de carros"
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <ModalProvider>
        {children}
        <ModalCustom />
      </ModalProvider>
    </main>
  );
}
