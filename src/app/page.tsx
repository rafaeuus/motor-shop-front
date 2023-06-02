"use client";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function Home() {
  const handleToast = () => {
    toast.success("Hello World");
  };

  return (
    <main className="">
      <h1>Hello World</h1>
      <button className="mt-2 rounded-md bg-blue-500 px-6 py-4 text-white" onClick={handleToast}>
        Toast
      </button>
      <p className="">Read More about hot-toast:</p>
      <Link href={"https://react-hot-toast.com/"}>https://react-hot-toast.com/</Link>
    </main>
  );
}
