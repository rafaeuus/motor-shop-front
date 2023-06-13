"use client";
import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: "Comprador" | "Anunciante";
  id: "buyer" | "advertiser";
  value: "false" | "true";
  register?: UseFormRegisterReturn;
}

const InputRadio = ({ label, id, value, register }: InputRadioProps) => {
  return (
    <>
      <input type="radio" id={id} value={value.toString()} className="peer hidden" {...register} />
      <label
        htmlFor={id}
        className="inline-flex h-12 w-[152px] cursor-pointer items-center justify-center rounded-md border-[2px] border-grey5 bg-grey10 p-4 text-grey0 hover:bg-Brand2 hover:text-grey10 peer-checked:border-Brand1  peer-checked:bg-Brand1 peer-checked:text-grey10">
        <div className="font-sans text-base font-semibold">{label}</div>
      </label>
    </>
  );
};

export default InputRadio;
