import React from "react";

const Clock = ({ className }) => (
  <svg
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
  >
    <path
      d="M11.4085 5.9999C11.4085 8.67848 9.23708 10.8499 6.5585 10.8499C3.87991 10.8499 1.7085 8.67848 1.7085 5.9999C1.7085 3.32132 3.87992 1.1499 6.5585 1.1499C9.23708 1.1499 11.4085 3.32132 11.4085 5.9999Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.55859 3.11963V5.99963L8.47859 6.95963"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Clock;
