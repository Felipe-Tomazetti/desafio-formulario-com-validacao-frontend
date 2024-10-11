import React, { useState } from "react";
import { Form, useFormik, Formik } from "formik";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
import Alert from "../Alert";
import useRegisterForm from "./useRegisterForm";
import RegisterFormSchema from "./RegisterFormSchema";

const RegisterForm: React.FC = () => {
  const { initialValues, message, onSubmit } = useRegisterForm();

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-cyan-600 to-black border-blue-700 min-h-screen ">
      <div className="form-container w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Formulário de cadastro para o ProjetoFrontEnd Fusion
        </h2>

        <Alert mensagem={message} />
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterFormSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <InputField label="Nome" name="nome" type="text" />
            <InputField label="E-mail" name="email" type="email" />
            <InputField label="Idade" name="idade" type="number" />
            <InputField label="Ocupação" name="ocupacao" type="text" />

            <SubmitButton label="Cadastrar" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
