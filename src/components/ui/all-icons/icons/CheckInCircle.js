import React from "react";

const CheckInCircle = ({ className }) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
  >
    <path
      d="M10.8 5.56134V6.00294C10.7994 7.03802 10.4642 8.04518 9.84443 8.87422C9.22467 9.70325 8.35353 10.3097 7.36092 10.6032C6.36832 10.8967 5.30743 10.8615 4.3365 10.5027C3.36556 10.144 2.53659 9.48107 1.97321 8.61273C1.40984 7.7444 1.14225 6.71721 1.21036 5.68437C1.27846 4.65153 1.67861 3.66838 2.35113 2.88154C3.02364 2.0947 3.93249 1.54633 4.94212 1.31821C5.95175 1.0901 7.00808 1.19446 7.95355 1.61574"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.7998 2.1626L5.99981 6.9674L4.55981 5.5274"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckInCircle;
