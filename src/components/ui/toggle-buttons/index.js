import React, { useMemo } from "react";
import useStyleRewriter from "../../../functions/hooks/use-style-rewriter";

const ToggleButtons = ({
  setActiveButton = () => {},
  buttons = [],
  activeButton = 0,
  variant,
  inRow = true,
  className,
  buttonClassName,
}) => {
  const baseClasses = useMemo(() => {
    if (variant === "icon") {
      return "@wh w-8 dark:text-white";
    } else {
      return "@pg px-6";
    }
  }, []);

  const defaultButtonSrClasses = useStyleRewriter(
    `${defaultButtonClasses} ${buttonClasses} ${baseClasses}`,
    buttonClassName
  );

  const activeButtonSrClasses = useStyleRewriter(
    `${activeButtonClasses} ${buttonClasses} ${baseClasses}`,
    buttonClassName
  );

  function returnChildComponent(item, isActive = false) {
    if (variant === "icon") {
      return item;
    }
    return (
      <span
        className={`${defaultTextClasses} ${
          isActive ? "dark:text-white" : "text-true-gray-450"
        }`}
      >
        {item}
      </span>
    );
  }

  return (
    <>
      <div className={`${containerClasses} ${className}`}>
        <div
          className={`-my-px flex ${
            inRow ? "flex-row items-center" : "flex-col"
          }`}
        >
          {buttons &&
            buttons.length &&
            buttons.map((item, index) =>
              activeButton === index ? (
                <button
                  key={index}
                  onClick={() => {
                    setActiveButton(index);
                  }}
                  className={defaultButtonSrClasses}
                >
                  {returnChildComponent(item, true)}
                </button>
              ) : (
                <button
                  onClick={() => {
                    setActiveButton(index);
                  }}
                  key={index}
                  className={activeButtonSrClasses}
                >
                  {returnChildComponent(item)}
                </button>
              )
            )}
        </div>
      </div>
    </>
  );
};

export default ToggleButtons;

const containerClasses = "bg-true-gray-100 dark:bg-true-gray-900 rounded-8px";
const buttonClasses = `
  flex shrink-0 justify-center items-center h-8 rounded-8px focus:outline-none
  @brw border-px 
`;
const defaultButtonClasses =
  "bg-white dark:bg-true-gray-800 border-gray-medium dark:border-true-gray-750 shadow-sm dark:shadow-dark-100";
const activeButtonClasses = "bg-transparent border-transparent";
const defaultTextClasses = "text-12px leading-18px ";
