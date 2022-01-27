import React from "react";

const Chevron = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.5303 6.53033C10.8232 6.23744 10.8232 5.76256 10.5303 5.46967C10.2374 5.17678 9.76256 5.17678 9.46967 5.46967L10.5303 6.53033ZM7 9L6.46967 9.53033C6.76256 9.82322 7.23744 9.82322 7.53033 9.53033L7 9ZM4.53033 5.46967C4.23744 5.17678 3.76256 5.17678 3.46967 5.46967C3.17678 5.76256 3.17678 6.23744 3.46967 6.53033L4.53033 5.46967ZM9.46967 5.46967L6.46967 8.46967L7.53033 9.53033L10.5303 6.53033L9.46967 5.46967ZM7.53033 8.46967L4.53033 5.46967L3.46967 6.53033L6.46967 9.53033L7.53033 8.46967Z" />
    </svg>
  );
};

export default Chevron;