import React from "react";

const Browser = ({ className }) => (
  <svg
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
  >
    <path
      d="M15.7728 3H6.22721C4.99918 3 4 4.61518 4 6.6V9H4.53846C4.53846 8.14286 5.07692 7.28571 5.61538 7.28571H16.3846C16.9231 7.28571 17.4615 8.14286 17.4615 9H18V6.6C18 4.61518 17.0008 3 15.7728 3Z"
      fill="black"
      fillOpacity="0.15"
    />
    <rect
      x="3.75"
      y="3.75"
      width="14.5"
      height="12.5"
      rx="1.25"
      stroke="#1D1D1D"
      strokeWidth="1.5"
    />
  </svg>
);

export default Browser;
