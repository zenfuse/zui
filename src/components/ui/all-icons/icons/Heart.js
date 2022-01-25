import React from "react";

const Heart = ({ className }) => (
  <svg
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
  >
    <path
      d="M6.175 1C3.59313 1 1.5 3.09067 1.5 5.66951C1.5 10.339 7.025 14.584 10 15.5714C12.975 14.584 18.5 10.339 18.5 5.66951C18.5 3.09067 16.4069 1 13.825 1C12.244 1 10.8458 1.78405 10 2.98412C9.56891 2.3708 8.99622 1.87027 8.3304 1.52489C7.66458 1.17952 6.92525 0.999471 6.175 1Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Heart;
