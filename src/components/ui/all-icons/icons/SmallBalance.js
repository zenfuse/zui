import React from "react";

const SmallBalance = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 5.09091C7.28878 5.09091 5.09091 7.28878 5.09091 10C5.09091 12.7112 7.28878 14.9091 10 14.9091C12.7112 14.9091 14.9091 12.7112 14.9091 10C14.9091 7.28878 12.7112 5.09091 10 5.09091ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z" />
      <circle opacity="0.6" cx="10" cy="10" r="2" />
    </svg>
  );
};

export default SmallBalance;
