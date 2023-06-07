import { Footer } from "@/Components/Footer";
import { ModalCustom } from "@/Components/Modal";
import { Navbar } from "@/Components/Navbar";
import { AuthProvider } from "@/contexts/AuthContext.tsx";
import "@/styles/globals.css";
import { Inter, Lexend } from "next/font/google";
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
  return (
    <html lang="pt-Br">
      <body className={`${inter.variable} ${lexend.variable}`}>
        <AuthProvider>
          <>
            <Navbar />
            {children}
            <Footer />
            <ModalCustom />
            <Toaster />
          </>
        </AuthProvider>
      </body>
    </html>
  );
}
