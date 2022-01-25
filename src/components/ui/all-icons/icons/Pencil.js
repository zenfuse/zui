import React from "react";

const Pencil = ({ className }) => (
  <svg
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
  >
    <path
      d="M10.3551 16.6975L3.83372 10.176L12.3969 1.6129C13.0637 0.946022 14.1462 0.946022 14.8131 1.6129L18.9183 5.71809C19.5852 6.38497 19.5852 7.46745 18.9183 8.13433L10.3551 16.6975Z"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M5.46475 16.8035L10.3504 16.6972L3.82654 10.1733L3.72022 15.059C3.70089 16.0303 4.49584 16.8252 5.46475 16.8035Z"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M11.0681 2.94189L17.5895 9.46332"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M14.3854 6.25928L7.15116 13.4935"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export default Pencil;
