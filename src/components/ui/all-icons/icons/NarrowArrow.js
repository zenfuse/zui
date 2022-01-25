import React from "react";

const NarrowArrow = ({ className }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} stroke-current`}
  >
    <path
      d="M13.5996 10L9.99961 6.4L6.39961 10"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 13.5996L10 6.39961"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default NarrowArrow;
