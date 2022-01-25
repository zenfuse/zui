import React from "react";

const Triangle = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.6163 3.92504C10.8697 2.69165 9.13025 2.69165 8.38375 3.92504L2.29276 13.9887C1.49934 15.2996 2.412 17 3.90901 17H16.091C17.588 17 18.5007 15.2996 17.7072 13.9887L11.6163 3.92504Z" />
    </svg>
  );
};

export default Triangle;
