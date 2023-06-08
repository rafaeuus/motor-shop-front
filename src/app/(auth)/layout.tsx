export const metadata = {
  title: "Motor-Shop",
  description: "Loja de carros"
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
