import React from "react";
import { useField } from "formik";

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  placeholder,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-md font-semibold text-gray-700"
      >
        {label}
      </label>
      <input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        className={`mt-1 block w-full p-2 border text-white bg-gray-600  ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        } rounded`}
      />
      {meta.touched && meta.error ? (
        <p className="text-red-500 text-xs mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default InputField;
