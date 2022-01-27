import React from "react";

const Youtube = ({ className }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current ${className}`}
    >
      <path d="M18.235 5.21418C17.7467 4.32989 17.2169 4.16724 16.138 4.10538C15.0602 4.03093 12.3501 4 10.0022 4C7.64987 4 4.93862 4.03093 3.862 4.10424C2.78537 4.16724 2.25437 4.32875 1.76162 5.21418C1.25875 6.09733 1 7.61849 1 10.2966V10.3057C1 12.9723 1.25875 14.505 1.76162 15.3789C2.25437 16.2632 2.78425 16.4236 3.86087 16.4981C4.93862 16.5622 7.64987 16.6 10.0022 16.6C12.3501 16.6 15.0602 16.5622 16.1391 16.4992C17.218 16.4247 17.7479 16.2644 18.2361 15.3801C18.7435 14.5061 19 12.9735 19 10.3069V10.2977C19 7.61849 18.7435 6.09733 18.235 5.21418ZM7.75 13.7364V6.86364L13.375 10.3L7.75 13.7364Z" />
    </svg>
  );
};

export default Youtube;