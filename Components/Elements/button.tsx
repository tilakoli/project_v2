import React from "react";

type Props = {
  value?: string;
  label: string;
  buttonType: "button" | "submit" | "reset";
};

const Button = ({ value, label, buttonType }: Props) => {
  return (
    <div>
      <button
        value={value}
        type={buttonType}
        className="p-2 pb-2 border-b border-customBlue hover:text-customBlue hover:border-b-0 hover:border-l-2 hover:transition-transform hover:duration-700"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
