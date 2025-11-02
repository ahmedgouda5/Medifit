import React from "react";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#503217] hover:bg-[#8F7D6A] text-white py-2 px-4 rounded-lg flex items-center transition-all duration-200"
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span className="font-mono text-[12px]">{text}</span>
    </button>
  );
};

export default Button;
