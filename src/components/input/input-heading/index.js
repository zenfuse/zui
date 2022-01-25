import React from "react";
import Button from "../../smart-button";
import P from "../../ui/typography/p";
import useStyleRewriter from "../../../functions/hooks/use-style-rewriter";

const InputHeading = ({
  title = "",
  onButtonClick = () => console.log("InputHeading -> onClick"),
  buttonTitle,
  className,
}) => {
  const srClasses = useStyleRewriter(
    `@fx flex @wh w-full @it items-center justify-between`,
    className
  );

  return (
    <div className={srClasses}>
      <div className="w-fit pb-2">
        <P className="@leh leading-none">{title}</P>
      </div>
      {buttonTitle && (
        <div className="flex justify-end w-fit pb-2">
          <Button variant="text" onClick={onButtonClick}>
            <P
              className="@leh leading-none"
              className="text-gray-dark hover:text-blue-primary duration-200"
            >
              {buttonTitle}
            </P>
          </Button>
        </div>
      )}
    </div>
  );
};

export default InputHeading;
