import React from "react";

const Post = ({ className }) => (
  <svg
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} fill-current`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.5 3C0.5 1.34315 1.84315 0 3.5 0H11.5C13.1569 0 14.5 1.34315 14.5 3V9C14.5 10.6569 13.1569 12 11.5 12H3.5C1.84315 12 0.5 10.6569 0.5 9V3ZM3.5 2C2.94772 2 2.5 2.44772 2.5 3V9C2.5 9.55228 2.94772 10 3.5 10H11.5C12.0523 10 12.5 9.55229 12.5 9V3C12.5 2.44772 12.0523 2 11.5 2H3.5Z"
    />
    <path d="M2.5 4H12.5V6H2.5V4Z" />
  </svg>
);

export default Post;
