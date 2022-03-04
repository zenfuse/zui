import React from "react";

const RadioButton = ({
  active = false,
  onClick,
  activeColor = "blue-primary",
}) => (
  <div
    onClick={onClick}
    className={`w-full cursor-pointer flex rounded-full p-px duration-400 relative ${
      active ? `bg-${activeColor}` : "bg-gray-light dark:bg-true-gray-800"
    }`}
  >
    <div
      className={`w-full pb-1/2 rounded-full duration-800 flex item-center p-px ${
        active
          ? `border-${activeColor} bg-${activeColor}`
          : "border-pearl dark:border-true-gray-800 bg-pearl dark:bg-true-gray-850"
      }`}
    >
      <div className="relative h-full w-full">
        <div
          className={`absolute duration-200 w-1/2 pb-1/2 rounded-full shadow-md ${
            active
              ? "translate-x-full bg-white"
              : "translate-x-0 bg-white dark:bg-true-gray-700"
          }`}
        />
      </div>
    </div>
  </div>
);

export default RadioButton;
