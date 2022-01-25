import React from "react";

const MinusCircle = ({ className }) => {
  return (
    <svg
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current stroke-current ${className}`}
    >
      <path
        fill="none"
        d="M17.5 10.5C17.5 6.35938 14.1406 3 10 3C5.85938 3 2.5 6.35938 2.5 10.5C2.5 14.6406 5.85938 18 10 18C14.1406 18 17.5 14.6406 17.5 10.5Z"
        strokeWidth="1.25"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        d="M13.125 10.5H6.875"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MinusCircle;
