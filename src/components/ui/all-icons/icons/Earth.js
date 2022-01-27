import React from "react";

const Earth = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-current ${className}`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM3 12C3 7.032 7.032 3 12 3C16.968 3 21 7.032 21 12C21 16.968 16.968 21 12 21C7.032 21 3 16.968 3 12ZM4.989 10.398C4.872 10.911 4.8 11.451 4.8 12C4.8 15.663 7.554 18.687 11.091 19.137V17.4C10.101 17.4 9.291 16.59 9.291 15.6V14.7L4.989 10.398ZM15.591 15.6C16.401 15.6 17.067 16.131 17.301 16.86C18.471 15.582 19.2 13.872 19.2 12C19.2 8.985 17.328 6.393 14.691 5.331V5.7C14.691 6.69 13.881 7.5 12.891 7.5H11.091V9.3C11.091 9.795 10.686 10.2 10.191 10.2H8.391V12H13.791C14.286 12 14.691 12.405 14.691 12.9V15.6H15.591Z"
    />
  </svg>
);

export default Earth;