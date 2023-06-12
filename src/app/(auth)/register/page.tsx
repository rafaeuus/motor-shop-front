"use client";
import { Button } from "@/Components/Button";
import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterData, registerSchema } from "./schema";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TRegisterData>({
    resolver: zodResolver(registerSchema)
  });
  console.log(errors);
  const formSubmit: SubmitHandler<TRegisterData> = (data) => {
    console.log(data);
  };
  return (
    <section className="flex h-max w-screen items-center justify-center bg-grey8">
      <form
        className="my-8 flex max-h-max w-[411px] flex-col items-start justify-center gap-4 rounded bg-grey10 p-12"
        onSubmit={handleSubmit(formSubmit)}>
        <h4 className="prose-heading-5-500">Cadastro</h4>
        <div className="flex w-full flex-col gap-4">
          <h5 className="prose-body-2-500">Informações pessoais</h5>
          <Input
            label="Nome"
            type="text"
            placeholder="Ex: João da Silva"
            {...register("name")}
            error={errors.name?.message}
            key={"name"}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Ex: joao@mail.com"
            {...register("email")}
            error={errors.email?.message}
            key={"email"}
          />
          <Input
            label="CPF"
            type="text"
            placeholder="000.000.000-00"
            {...register("cpf")}
            error={errors.cpf?.message}
            key={"cpf"}
          />
          <Input
            label="Celular"
            type="text"
            placeholder="(DDD) 00000-0000"
            {...register("phone")}
            error={errors.phone?.message}
            key={"phone"}
          />
          <Input
            label="Data de nascimento"
            type="date"
            {...register("birthDate")}
            error={errors.birthDate?.message}
            key={"birthDate"}
          />
          <TextArea
            label="Descrição"
            placeholder="Ex: Sobre mim"
            {...register("description")}
            error={errors.description?.message}
            key={"description"}
          />
          <h5 className="prose-body-2-500">Informações de Endereço</h5>
          <Input
            label="CEP"
            type="text"
            placeholder="00000.000"
            {...register("zipCode")}
            error={errors.zipCode?.message}
            key={"zipCode"}
          />
          <div className="flex w-full gap-4">
            <Input
              label="Estado"
              type="text"
              placeholder="Digitar Estado"
              {...register("state")}
              error={errors.state?.message}
              key={"state"}
            />
            <Input
              label="Cidade"
              type="text"
              placeholder="Digitar Cidade"
              {...register("city")}
              error={errors.city?.message}
              key={"city"}
            />
          </div>
          <Input
            label="Rua"
            type="text"
            placeholder="Digitar Rua"
            {...register("street")}
            error={errors.street?.message}
            key={"street"}
          />
          <div className="flex w-full gap-4">
            <Input
              label="Número"
              type="text"
              placeholder="Digitar Número"
              {...register("number")}
              error={errors.number?.message}
              key={"number"}
            />
            <Input
              label="Complemento"
              type="text"
              placeholder="Ex: apart 307"
              {...register("complement")}
              error={errors.complement?.message}
              key={"complement"}
            />
          </div>
          <h5 className="prose-body-2-500">Tipo de conta</h5>
          <div className="flex w-full justify-between gap-4">
            <div>
              <input
                type="radio"
                id="comprador"
                value="comprador"
                className="peer hidden"
                {...register("isAdvertiser")}
                key={"isAdvertiser"}
              />
              <label
                htmlFor="comprador"
                className="inline-flex h-12 w-[152px] cursor-pointer items-center justify-center rounded-md border-[2px] border-grey5 bg-grey10 p-4 text-grey0 hover:bg-Brand2 hover:text-grey10 peer-checked:border-Brand1  peer-checked:bg-Brand1 peer-checked:text-grey10">
                <div className="font-sans text-base font-semibold">Comprador</div>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="Anunciante"
                value="anunciante"
                className="peer hidden"
                {...register("isAdvertiser")}
                key={"isAdvertiser"}
              />
              <label
                htmlFor="Anunciante"
                className="inline-flex h-12 w-[152px] cursor-pointer items-center justify-center rounded-md border-[2px] border-grey5 bg-grey10 p-4 text-grey0 hover:bg-Brand2 hover:text-grey10 peer-checked:border-Brand1  peer-checked:bg-Brand1 peer-checked:text-grey10">
                <div className="font-sans text-base font-semibold">Anunciante</div>
              </label>
            </div>
          </div>
          <Input
            label="Senha"
            type="password"
            placeholder="Digitar Senha"
            {...register("password")}
            error={errors.password?.message}
            key={"password"}
          />
          <Input
            label="Confirmar senha"
            type="password"
            placeholder="Digitar Senha"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
            key={"confirmPassword"}
          />
        </div>
        <Button variant="gradient" color="blue" size="primary" fullWidth type="submit">
          Finalizar Cadastro
        </Button>
      </form>
    </section>
  );
};

export default Register;
