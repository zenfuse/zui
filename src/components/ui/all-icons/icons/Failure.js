import React from "react";

const Failure = ({ className }) => (
  <svg
    viewBox="0 0 34 34"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
  >
    <path
      d="M32 17C32 8.71875 25.2812 2 17 2C8.71875 2 2 8.71875 2 17C2 25.2812 8.71875 32 17 32C25.2812 32 32 25.2812 32 17Z"
      strokeWidth="2.2"
      strokeMiterlimit="10"
    />
    <path
      d="M22 12L12 22"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12L22 22"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Failure;
