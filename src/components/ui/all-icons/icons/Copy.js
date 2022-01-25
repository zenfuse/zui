import React from "react";

const Copy = ({ className }) => {
  return (
    <svg
      className={`stroke-current fill-current ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1 5.45C17.1 5.20147 16.8985 5 16.65 5C16.4015 5 16.2 5.20147 16.2 5.45V16.2H5.45C5.20147 16.2 5 16.4015 5 16.65C5 16.8985 5.20147 17.1 5.45 17.1H16.3C16.7418 17.1 17.1 16.7418 17.1 16.3V5.45ZM14.3 3.7C14.3 3.25817 13.9418 2.9 13.5 2.9H3.7C3.25817 2.9 2.9 3.25817 2.9 3.7V13.5C2.9 13.9418 3.25817 14.3 3.7 14.3H13.5C13.9418 14.3 14.3 13.9418 14.3 13.5V3.7ZM3.8 13.4V3.8H13.4V13.4H3.8Z"
        strokeWidth="0.2"
      />
    </svg>
  );
};

export default Copy;
