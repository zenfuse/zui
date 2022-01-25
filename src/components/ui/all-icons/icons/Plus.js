import React from "react";

const Plus = ({ className }) => {
  return (
    <svg
      className={`fill-current stroke-current ${className}`}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.55811 1V8.11621"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 4.55811H8.11621"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Plus;
