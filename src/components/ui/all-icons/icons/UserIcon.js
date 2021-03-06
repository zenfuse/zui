import React from "react";

const UserIcon = ({ className }) => {
  return (
    <svg
      className={`stroke-current ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.6667 14V12.6667C13.6667 11.9594 13.3857 11.2811 12.8856 10.781C12.3855 10.281 11.7072 10 11 10H5.66667C4.95942 10 4.28115 10.281 3.78105 10.781C3.28095 11.2811 3 11.9594 3 12.6667V14" />
      <path d="M8.33366 7.33333C9.80642 7.33333 11.0003 6.13943 11.0003 4.66667C11.0003 3.19391 9.80642 2 8.33366 2C6.8609 2 5.66699 3.19391 5.66699 4.66667C5.66699 6.13943 6.8609 7.33333 8.33366 7.33333Z" />
    </svg>
  );
};

export default UserIcon;
