import React from "react";

const DnD = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 8C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6L17 6C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8L3 8Z" />
      <path d="M3 14C2.44772 14 2 13.5523 2 13C2 12.4477 2.44772 12 3 12L17 12C17.5523 12 18 12.4477 18 13C18 13.5523 17.5523 14 17 14L3 14Z" />
    </svg>
  );
};

export default DnD;
