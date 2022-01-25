import React from "react";

const StarOutline = ({ className }) => {
  return (
    <svg
      className={`stroke-current ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.45109 2.87527C8.36803 2.70153 8.19257 2.59094 8 2.59094C7.80743 2.59094 7.63197 2.70153 7.54891 2.87527L6.11826 5.86753L2.92539 6.34934C2.73908 6.37745 2.58439 6.50793 2.52526 6.68684C2.46613 6.86574 2.5126 7.0627 2.64547 7.19631L4.96476 9.52851L4.41676 12.8272C4.38545 13.0157 4.46428 13.2055 4.61989 13.3164C4.77549 13.4272 4.98067 13.4397 5.14857 13.3485L8 11.8004L10.8514 13.3485C11.0193 13.4397 11.2245 13.4272 11.3801 13.3164C11.5357 13.2055 11.6146 13.0157 11.5832 12.8272L11.0352 9.52851L13.3545 7.19631C13.4874 7.0627 13.5339 6.86574 13.4747 6.68684C13.4156 6.50793 13.2609 6.37745 13.0746 6.34934L9.88174 5.86753L8.45109 2.87527Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarOutline;
