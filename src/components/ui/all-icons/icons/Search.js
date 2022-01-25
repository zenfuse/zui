import React from "react";

const Search = ({ className }) => {
  return (
    <svg
      className={`stroke-current ${className}`}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.82908 10.6582C8.94382 10.6582 10.6582 8.94382 10.6582 6.82908C10.6582 4.71434 8.94382 3 6.82908 3C4.71434 3 3 4.71434 3 6.82908C3 8.94382 4.71434 10.6582 6.82908 10.6582Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6154 11.6153L9.53333 9.5332"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Search;
