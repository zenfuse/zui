import React from "react";

const ExternalLink = ({ className }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    className={`stroke-current ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      d="M13.9999 10.6671V14.6671C13.9999 15.0207 13.8594 15.3598 13.6094 15.6099C13.3593 15.8599 13.0202 16.0004 12.6666 16.0004H5.33332C4.9797 16.0004 4.64057 15.8599 4.39052 15.6099C4.14047 15.3598 4 15.0207 4 14.6671V7.33381C4 6.98019 4.14047 6.64105 4.39052 6.39101C4.64057 6.14096 4.9797 6.00049 5.33332 6.00049H9.33327"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill="none"
      d="M12 4H16V7.99995"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill="none"
      d="M8.6665 11.3332L15.9998 4"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ExternalLink;
