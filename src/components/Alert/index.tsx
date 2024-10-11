import React from "react";

interface AlertProps {
  message: string | null;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      className={`mb-4 p-2 text-center ${
        message.includes("sucesso")
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      } rounded`}
    >
      {message}
    </div>
  );
};

export default Alert;
