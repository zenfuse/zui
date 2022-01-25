import React from "react";

const Aim = ({ className }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
  >
    <path
      d="M10 17V15.6M10 4.4V3V4.4Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 5C9.01109 5 8.0444 5.29324 7.22215 5.84265C6.3999 6.39206 5.75904 7.17295 5.3806 8.08658C5.00217 9.00021 4.90315 10.0055 5.09608 10.9755C5.289 11.9454 5.76521 12.8363 6.46447 13.5355C7.16373 14.2348 8.05465 14.711 9.02455 14.9039C9.99445 15.0969 10.9998 14.9978 11.9134 14.6194C12.827 14.241 13.6079 13.6001 14.1573 12.7778C14.7068 11.9556 15 10.9889 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5Z"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M3 10H4.4M15.6 10H17H15.6Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle opacity="0.15" cx="10" cy="10" r="2" fill="#1D1D1D" />
  </svg>
);

export default Aim;
