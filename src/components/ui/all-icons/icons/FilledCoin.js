import React from "react";

const FilledCoin = ({ className }) => (
  <svg
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-current ${className}`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.99995 17.8002C13.8601 17.8002 17.7999 13.8603 17.7999 9.00019C17.7999 4.14009 13.8601 0.200195 8.99995 0.200195C4.13985 0.200195 0.199951 4.14009 0.199951 9.00019C0.199951 13.8603 4.13985 17.8002 8.99995 17.8002ZM5.39514 8.38117C5.00462 8.7717 5.00462 9.40486 5.39514 9.79539L8.38093 12.7812C8.77145 13.1717 9.40462 13.1717 9.79514 12.7812L12.7809 9.79539C13.1715 9.40486 13.1715 8.7717 12.7809 8.38117L9.79514 5.39539C9.40462 5.00486 8.77145 5.00486 8.38093 5.39539L5.39514 8.38117Z"
    />
  </svg>
);

export default FilledCoin;
