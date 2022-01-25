import React from "react";

const Calendar = ({ className }) => (
  <svg
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-current ${className}`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.9 0C4.2866 0 4.6 0.313401 4.6 0.7V1.6H10.2V0.7C10.2 0.313401 10.5134 0 10.9 0C11.2866 0 11.6 0.313401 11.6 0.7V1.6H12.4C13.7255 1.6 14.8 2.67452 14.8 4V13C14.8 14.3255 13.7255 15.4 12.4 15.4H2.4C1.07452 15.4 0 14.3255 0 13V4C0 2.67452 1.07452 1.6 2.4 1.6H3.2V0.7C3.2 0.313401 3.5134 0 3.9 0ZM10.2 3V3.3C10.2 3.6866 10.5134 4 10.9 4C11.2866 4 11.6 3.6866 11.6 3.3V3H12.4C12.9523 3 13.4 3.44772 13.4 4V4.6H1.4V4C1.4 3.44772 1.84772 3 2.4 3H3.2V3.3C3.2 3.6866 3.5134 4 3.9 4C4.2866 4 4.6 3.6866 4.6 3.3V3H10.2ZM1.4 6V13C1.4 13.5523 1.84772 14 2.4 14H12.4C12.9523 14 13.4 13.5523 13.4 13V6H1.4Z"
    />
  </svg>
);

export default Calendar;
