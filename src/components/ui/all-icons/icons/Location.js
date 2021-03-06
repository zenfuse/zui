import React from "react";

const Location = ({ className }) => (
  <svg
    viewBox="0 0 12 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
  >
    <path
      d="M11.25 6.13636C11.25 8.22755 9.9187 10.2625 8.44979 11.8483C7.72967 12.6257 7.00713 13.2623 6.46389 13.7047C6.28765 13.8482 6.1309 13.9708 6 14.0706C5.8691 13.9708 5.71235 13.8482 5.53611 13.7047C4.99287 13.2623 4.27033 12.6257 3.55021 11.8483C2.0813 10.2625 0.75 8.22755 0.75 6.13636C0.75 4.70244 1.30712 3.33055 2.29361 2.32164C3.27955 1.3133 4.61312 0.75 6 0.75C7.38688 0.75 8.72045 1.3133 9.70639 2.32164C10.6929 3.33055 11.25 4.70244 11.25 6.13636Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.15"
      d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
    />
  </svg>
);

export default Location;
