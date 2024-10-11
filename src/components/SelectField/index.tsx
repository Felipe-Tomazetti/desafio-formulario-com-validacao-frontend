import React from "react";
import { useField } from "formik";

interface SelectFieldProps {
  name: string;
  label: string;
}

const SelectField = ({ name, label }: SelectFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="flex self-start text-md font-semibold text-white"
      >
        {label}
      </label>
      <select
        {...field}
        className={`mt-1 block w-full p-2 border text-black bg-white  ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        } rounded`}
      >
        <option value="">Selecione uma opção</option>
        <option value="frontend">Desenvolvedor Frontend</option>
        <option value="backend">Desenvolvedor backend</option>
        <option value="fullstack">Desenvolvedor Full Stack</option>
        <option value="mobile">Desenvolvedor Mobile</option>
        <option value="devSoftware">Desenvolvedor de Software</option>
        <option value="engSofware">Engenheiro de Software</option>
        <option value="arqSoftware">Arquiteto de Software</option>
        <option value="UI/UX">UI/UX Designer</option>
        <option value="analistaSistema">Analista de Sistemas</option>
        <option value="analistaProg">Analista Programador</option>
        <option value="devOps">DevOps Engineer</option>
        <option value="engDados">Engenheiro de Dados</option>
        <option value="QA">QA Engineer</option>
        <option value="scrum">Scrum Master</option>
        <option value="PO">Product Owner</option>
      </select>
      {meta.touched && meta.error ? (
        <p className="text-red-500 text-xs mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default SelectField;
