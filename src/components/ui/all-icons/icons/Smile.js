import React from "react";

const Smile = ({ className }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
  >
    <circle cx="10" cy="10" r="8.5" strokeWidth="1.5" />
    <path
      d="M7.71436 11.1428C8.31315 11.9412 9.00208 12.2857 10.0001 12.2857C10.9981 12.2857 11.687 11.9412 12.2858 11.1428"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="6.28561" cy="8.5715" r="0.857143" />
    <circle cx="13.7143" cy="8.5715" r="0.857143" />
  </svg>
);

export default Smile;
