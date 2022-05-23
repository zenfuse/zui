import React from "react";

const Authentication = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="url(#paint0_linear_13205_273475)" />
      <path
        d="M20.9779 15.2891H11.0223C10.2368 15.2891 9.6001 15.9258 9.6001 16.7113V21.6891C9.6001 22.4745 10.2368 23.1113 11.0223 23.1113H20.9779C21.7633 23.1113 22.4001 22.4745 22.4001 21.6891V16.7113C22.4001 15.9258 21.7633 15.2891 20.9779 15.2891Z"
        fill="white"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4443 15.2887V12.4442C12.4443 11.5012 12.8189 10.5969 13.4857 9.93007C14.1525 9.26327 15.0569 8.88867 15.9999 8.88867C16.9429 8.88867 17.8473 9.26327 18.514 9.93007C19.1808 10.5969 19.5554 11.5012 19.5554 12.4442V15.2887"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_13205_273475"
          x1="3.73333"
          y1="27.7333"
          x2="35.2"
          y2="4.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#571ED2" />
          <stop offset="1" stopColor="#BB6BED" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Authentication;
