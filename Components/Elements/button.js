import React from "react";

const Button = ({ value }) => {
  return (
    <div>
      <button
        value={value}
        type="submit"
        className="p-2 pb-2 border-b border-customBlue hover:text-customBlue hover:border-b-0 hover:border-l-2 hover:transition-transform hover:duration-700"
      >
        Send Message
      </button>
    </div>
  );
};

export default Button;
