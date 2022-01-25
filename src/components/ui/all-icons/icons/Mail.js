import React from "react";

const Mail = ({ className }) => (
  <svg
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
  >
    <rect
      x="0.75"
      y="0.75"
      width="14.5"
      height="12.5"
      rx="1.25"
      strokeWidth="1.5"
    />
    <path
      d="M1 2L8 7L15 2"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path opacity="0.15" d="M8 7L1 1H15L8 7Z" fill="#1D1D1D" />
  </svg>
);

export default Mail;
