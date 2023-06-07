"use client";

import CategoryFilters from "@/Components/CategoryFilters";
import { Button } from "@/Components/Button";
import Card from "@/Components/Card";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import TextArea from "@/Components/TextArea";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function Home() {
  const handleToast = () => {
    toast.success("Hello World");
  };

  return (
    <main className="">
      <button className="mt-2 rounded-md bg-blue-500 px-6 py-4 text-white" onClick={handleToast}>
        Toast
      </button>
      <p className="">Read More about hot-toast:</p>
      <Link href={"https://react-hot-toast.com/"}>https://react-hot-toast.com/</Link>
      <CategoryFilters>aqui Cards</CategoryFilters>
      <Button color="black" variant="gradient" size="secondary">
        Example
      </Button>
      <h1>opa</h1>
      <h1 className="prose-headingBold1">test</h1>
      <p className="prose-textBold1">test parr</p>
      <Input placeholder="Teste" label="Teste Input" />
      <TextArea placeholder="Teste" label="Teste TextArea" />
      <Select>
        <option value={"teste1"}>Teste 1</option>
        <option value={"teste1"}>Teste 2</option>
      </Select>
      <Card
        car={{
          brand: "Teste",
          model: "Volksvago",
          year: "2020",
          // eslint-disable-next-line camelcase
          fuel_type: "Gasolina",
          mileage: 20,
          color: "Preto",
          // eslint-disable-next-line camelcase
          fipe_price: 120.0,
          // eslint-disable-next-line camelcase
          cover_image: "",
          // eslint-disable-next-line camelcase
          created_at: new Date("1995-12-17T03:24:00"),
          description:
            "Esse é o carro teste, testando o carro que é o carro de teste para testar o teste do carro testado que será um teste",
          // eslint-disable-next-line camelcase
          is_published: false,
          price: 20000.5,
          user: { name: "Rafael" }
        }}
        isAdvertiserOwner={true}
      />
    </main>
  );
}
