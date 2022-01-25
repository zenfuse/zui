import React from "react";

const Compound = ({ className }) => {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current ${className}`}
    >
      <circle opacity="0.2" cx="6" cy="6" r="6" />
      <circle cx="6" cy="6" r="3" />
    </svg>
  );
};

export default Compound;
