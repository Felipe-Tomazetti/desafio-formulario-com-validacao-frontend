import React from "react";

interface AlertProps {
  mensagem: string | null;
}

const Alert: React.FC<AlertProps> = ({ mensagem }) => {
  if (!mensagem) return null;

  return (
    <div
      className={`mb-4 p-2 text-center ${
        mensagem.includes("sucesso")
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      } rounded`}
    >
      {mensagem}
    </div>
  );
};

export default Alert;
