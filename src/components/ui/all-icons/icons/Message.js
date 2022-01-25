import React from "react";

const Message = ({ className }) => (
  <svg
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
  >
    <path
      d="M11.7 14.6C14.9054 14.6 16.5084 14.6 17.5038 13.6038C18.5 12.6084 18.5 11.0053 18.5 7.8C18.5 4.59465 18.5 2.99155 17.5038 1.9962C16.5084 1 14.9054 1 11.7 1H8.3C5.09465 1 3.49155 1 2.4962 1.9962C1.5 2.99155 1.5 4.59465 1.5 7.8C1.5 11.0053 1.5 12.6084 2.4962 13.6038C3.05125 14.1597 3.795 14.4054 4.9 14.5133"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.7004 14.6C10.6498 14.6 9.49205 15.025 8.4355 15.5732C6.7372 16.4546 5.88805 16.8958 5.46985 16.6144C5.05165 16.3339 5.1307 15.4627 5.28965 13.7211L5.32535 13.325"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Message;
