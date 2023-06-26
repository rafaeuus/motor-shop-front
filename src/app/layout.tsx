import { Footer } from "@/Components/Footer";
import { ModalCustom } from "@/Components/Modal";
import { Navbar } from "@/Components/Navbar";
import { AuthProvider } from "@/contexts/AuthContext";
import { IdecodedToken, TinfosToken } from "@/contexts/AuthContext/types";
import { ModalProvider } from "@/contexts/ModalContext.tsx";
import { api } from "@/services/api";
import "@/styles/globals.css";
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { Inter, Lexend } from "next/font/google";
import { cookies } from "next/headers";
import { Toaster } from "./Toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional"
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "optional",
  weight: "700",
  variable: "--font-lexend"
});

export const metadata = {
  title: "Motor-Shop",
  description: "Loja de carros"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const token = cookieStore.get("@motors-shop:token")?.value;

  let decodedToken: TinfosToken;

  if (token) {
    const decoded: IdecodedToken = jwt_decode(token!);
    decodedToken = {
      id: decoded.sub,
      isAdvertiser: decoded.isAdvertiser,
      name: decoded.name
    };
  }

  api.defaults.headers.common.authorization = `Bearer ${token}`;

  return (
    <html lang="pt-Br">
      <body className={`${inter.variable} ${inter.className} ${lexend.variable}`}>
        <AuthProvider decodedToken={decodedToken}>
          <>
            <ModalProvider>
              <Navbar />
              <ModalCustom />
            </ModalProvider>
            {children}
            <Footer />

            <Toaster />
          </>
        </AuthProvider>
      </body>
    </html>
  );
}
