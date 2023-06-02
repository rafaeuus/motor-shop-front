import { Toaster } from "@/Components/Toaster";
import "@/styles/globals.css";
import { Inter, Lexend } from "next/font/google";

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
      <body className={`${inter.variable} ${lexend.variable}`}>{children}</body>
      <Toaster />
    </html>
  );
}
