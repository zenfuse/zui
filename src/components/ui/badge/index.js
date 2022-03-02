import React from "react";
import useStyleRewriter from "../../../functions/hooks/use-style-rewriter";

const Badge = ({ text, image, containerClassName }) => {
  const containerSrClasses = useStyleRewriter(
    baseContainerClasses,
    containerClassName
  );

  return (
    <div className={containerSrClasses}>
      {text || null}
      {image && (
        <div
          className={
            "@pn absolute right-0 top-0 w-7 h-7 ring-gray-200 rounded-full ring-1 bg-white text-lg flex items-center justify-center -translate-y-1/2 translate-x-1/2"
          }
        >
          <img className="w-5" src={image} />
        </div>
      )}
    </div>
  );
};

export default Badge;

const baseContainerClasses =
  "@ftf font-family-rubik-medium @bdc bg-blue-primary @bdp bg-opacity-5 @pg px-3 py-2 @fts text-12px @wh w-fit @ttc text-blue-650 @brr rounded-8px @pn relative";
