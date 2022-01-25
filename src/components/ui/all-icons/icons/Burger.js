import React from "react";

const Burger = ({ className }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-current ${className}`}
  >
    <path d="M13 6L13 7.75L7 7.75L7 6L13 6Z" />
    <path d="M13 8.625L13 10.375L7 10.375L7 8.625L13 8.625Z" />
    <path d="M13 11.25L13 13L7 13L7 11.25L13 11.25Z" />
  </svg>
);

export default Burger;
