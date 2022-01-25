import React from "react";

const RussianFlag = ({ className }) => (
  <svg
    viewBox="0 0 25 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M24.7826 18.1487C24.7826 19.9033 23.5497 21.326 22.029 21.326H2.75362C1.23293 21.326 0 19.9033 0 18.1487V14.9714H24.7826V18.1487Z"
      fill="#E03325"
    />
    <path d="M0 7.02856H24.7826V14.9717H0V7.02856Z" fill="#2760CC" />
    <path
      d="M22.029 0.673828H2.75362C1.23293 0.673828 0 2.09645 0 3.85109V7.02834H24.7826V3.85109C24.7826 2.09645 23.5497 0.673828 22.029 0.673828Z"
      fill="#EEEEEE"
    />
  </svg>
);

export default RussianFlag;
