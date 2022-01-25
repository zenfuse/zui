import React from "react";

const Arrow = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.255 6.25853L22.7472 11.8759C23.0843 12.2206 23.0843 12.7794 22.7472 13.1241L17.255 18.7415C16.918 19.0862 16.3716 19.0862 16.0346 18.7415C15.6975 18.3968 15.6975 17.8379 16.0346 17.4932L20.0535 13.3827H2.85552C2.38303 13.3827 2 12.9875 2 12.5C2 12.0125 2.38303 11.6173 2.85552 11.6173H20.0535L16.0346 7.50682C15.6975 7.16212 15.6975 6.60324 16.0346 6.25853C16.3716 5.91382 16.918 5.91382 17.255 6.25853Z"
      />
    </svg>
  );
};

export default Arrow;
