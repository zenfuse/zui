import React from "react";

const BoldArrow = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      viewBox="0 0 27 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.625 9.375H2.625C2.12772 9.375 1.65081 9.17746 1.29917 8.82582C0.947544 8.47419 0.75 7.99728 0.75 7.5C0.75 7.00272 0.947544 6.5258 1.29917 6.17417C1.65081 5.82254 2.12772 5.625 2.625 5.625H17.625V0L27 7.5L17.625 15V9.375Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BoldArrow;
