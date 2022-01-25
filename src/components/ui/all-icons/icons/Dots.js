import React from "react";

const DotsHorizontal = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="15" r="2" />
      <circle cx="15" cy="15" r="2" />
      <circle cx="23" cy="15" r="2" />
    </svg>
  );
};

export default DotsHorizontal;
