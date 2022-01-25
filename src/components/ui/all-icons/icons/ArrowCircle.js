import React from "react";

const ArrowCircle = ({ className }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} stroke-current`}
    >
      <path
        d="M10.1 19C15.0705 19 19.1 14.9706 19.1 10C19.1 5.02944 15.0705 1 10.1 1C5.12941 1 1.09998 5.02944 1.09998 10C1.09998 14.9706 5.12941 19 10.1 19Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.50012 10L10.1001 13.6L13.7001 10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1001 6.40039V13.6004"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowCircle;
