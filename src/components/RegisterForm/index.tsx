import React from "react";
import { Form, Formik } from "formik";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
import Alert from "../Alert";
import SelectField from "../SelectField";
import useRegisterForm from "./useRegisterForm";
import RegisterFormSchema from "./RegisterFormSchema";
import Title from "../Title";

const RegisterForm: React.FC = () => {
  const { initialValues, message, onSubmit } = useRegisterForm();

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-cyan-600 from-0% to-black to-50% border-blue-700 min-h-screen ">
      <Title />
      <div className="form-container w-full max-w-md p-8 bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-300">
          Formulário de cadastro
        </h2>

        <Alert message={message} />
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterFormSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <InputField label="Nome" name="nome" type="text" />
            <InputField label="E-mail" name="email" type="email" />
            <InputField label="Idade" name="idade" type="number" />
            <SelectField label="Ocupação" name="ocupacao" />
            <InputField label="Linkedin" name="linkedin" type="text" />
            <InputField label="Github" name="github" type="text" />

            <SubmitButton label="Cadastrar" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
