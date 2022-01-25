import React from "react";

const Information = ({ className }) => {
  return (
    <svg
      className={`stroke-current ${className}`}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2747 13.2751H15.352V20.8053"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4959 21.0649H18.2085"
        strokeWidth="1.5"
        className="fill-current"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        className="fill-current"
        strokeWidth="0"
        d="M15.0927 7.43274C14.7589 7.43274 14.4326 7.53173 14.155 7.71719C13.8775 7.90264 13.6611 8.16624 13.5334 8.47465C13.4057 8.78306 13.3722 9.12242 13.4374 9.44982C13.5025 9.77722 13.6632 10.078 13.8993 10.314C14.1353 10.55 14.4361 10.7108 14.7635 10.7759C15.0909 10.841 15.4302 10.8076 15.7386 10.6799C16.047 10.5521 16.3106 10.3358 16.4961 10.0582C16.6815 9.78068 16.7805 9.45436 16.7805 9.12054C16.7805 8.67291 16.6027 8.24361 16.2862 7.92709C15.9697 7.61056 15.5404 7.43274 15.0927 7.43274V7.43274Z"
      />
    </svg>
  );
};

export default Information;
