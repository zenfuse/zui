import React from "react";

const Shield = ({ className }) => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
  >
    <path
      d="M12.974 2.85683C10.3946 2.39413 9.32815 2.05144 6.99998 1C4.6718 2.05144 3.60536 2.39413 1.02594 2.85683C0.558629 10.2634 6.55517 12.8209 6.99998 13C7.44478 12.8209 13.4413 10.2634 12.974 2.85683Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.15"
      d="M6.99998 1C4.6718 2.05144 3.60536 2.39413 1.02594 2.85683C0.558629 10.2634 6.55517 12.8209 6.99998 13V1Z"
      fill="#1D1D1D"
    />
  </svg>
);

export default Shield;
