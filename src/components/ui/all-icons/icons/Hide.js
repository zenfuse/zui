import React from "react";

const Hide = ({ className }) => {
  return (
    <svg
      className={`stroke-current ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.113 4.87537C7.37311 4.87537 4.56257 6.46115 2.35001 9.6327C2.28685 9.72423 2.25224 9.83242 2.25055 9.94361C2.24886 10.0548 2.28017 10.164 2.34052 10.2574C4.04054 12.9185 6.81346 14.9996 10.113 14.9996C13.3766 14.9996 16.2065 12.9122 17.9097 10.2451C17.9686 10.1535 18 10.0469 18 9.93801C18 9.82912 17.9686 9.72252 17.9097 9.63095C16.2026 6.99443 13.352 4.87537 10.113 4.87537Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1248 12.7498C11.678 12.7498 12.9371 11.4907 12.9371 9.93753C12.9371 8.38435 11.678 7.12524 10.1248 7.12524C8.5716 7.12524 7.3125 8.38435 7.3125 9.93753C7.3125 11.4907 8.5716 12.7498 10.1248 12.7498Z"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Hide;