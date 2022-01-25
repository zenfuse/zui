import React from "react";

const CurvedLine = ({ className }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
  >
    <path
      d="M7 18.5L11.5 10L14.5 18.5L17.5 15L19.5 20L24 13"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CurvedLine;
