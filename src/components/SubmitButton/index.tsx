import React from "react";

interface SubmitButtonProps {
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
  return (
    <button
      type="submit"
      className="w-44 md:w-80 bg-cyan-600 text-white py-2 rounded hover:bg-cyan-500 transition duration-300 mt-2"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
