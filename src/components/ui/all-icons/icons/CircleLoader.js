import React from "react";

const CircleLoader = ({ className }) => {
  return (
    <svg
      className={`stroke-current ${className}`}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z"
        stroke="#0065FF"
        strokeWidth="3"
      />
      <path
        d="M18.0005 33C26.2847 33 33.0005 26.2843 33.0005 18C33.0005 9.71573 26.2847 3 18.0005 3C15.037 3 12.2742 3.8594 9.94775 5.34258"
        stroke="url(#paint0_linear)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="29.2089"
          y1="27.6149"
          x2="16.305"
          y2="1.29244"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0065FF" stopOpacity="0.01" />
          <stop offset="1" stopColor="#0065FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CircleLoader;
