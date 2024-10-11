import { useState } from "react";

type RegisterFormValues = {
  nome: string;
  email: string;
  idade: string;
  ocupacao: string;
  linkedin?: string;
  github?: string;
};

const useRegisterForm = () => {
  const [message, setMessage] = useState<string | null>(null);

  const initialValues: RegisterFormValues = {
    nome: "",
    email: "",
    idade: "",
    ocupacao: "",
    linkedin: "",
    github: "",
  };

  async function onSubmit(
    values: RegisterFormValues,
    { resetForm }: { resetForm: () => void }
  ) {
    try {
      const storage = localStorage;

      const membros = JSON.parse(storage.getItem("membros") || "[]");

      membros.push(values);

      storage.setItem("membros", JSON.stringify(membros));
      setMessage("Cadastro realizado com sucesso!");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
      resetForm();
    } catch (erro) {
      setMessage("Falha ao cadastrar. Verifique os dados informados.");
    }
  }

  return {
    initialValues,
    message,
    onSubmit,
  };
};

export default useRegisterForm;
