import React from "react";

const Statistic = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 10.4286H6.5V16H3V10.4286Z" />
      <path d="M8.25 3H11.75V16H8.25V3Z" />
      <path d="M13.5 6.71429H17V16H13.5V6.71429Z" />
    </svg>
  );
};

export default Statistic;
