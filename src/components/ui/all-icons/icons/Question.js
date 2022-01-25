import React from "react";

const Question = ({ className }) => {
  return (
    <svg
      className={`stroke-current ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.15125 7.06425C7.38135 6.41014 7.83552 5.85856 8.43333 5.50723C9.03114 5.15589 9.734 5.02746 10.4174 5.14469C11.1009 5.26191 11.7207 5.61723 12.1673 6.1477C12.6138 6.67817 12.8583 7.34957 12.8572 8.04298C12.8572 10.0004 9.92104 10.9792 9.92104 10.9792"
        strokeWidth="1.20142"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99927 14.8939H10.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Question;
