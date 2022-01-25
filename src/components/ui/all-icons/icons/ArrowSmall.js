import React from "react";

const ArrowSmall = ({ className }) => {
  return (
    <svg
      className={`stroke-current ${className}`}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 11L11 7M11 7L7 3M11 7L3 7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowSmall;
