import React from "react";

const CircleDivider = ({ className, children, variant }) => {
  return (
    <>
      <div className={`${baseClasses} ${className}`}>{children}</div>
    </>
  );
};

export default CircleDivider;

const baseClasses = "w-1 h-1 flex shrink-0 bg-gray-500 mx-2 rounded-20px ";
