import React from "react";

const Badge = ({ text, image }) => {
  return (
    <div
      className={
        "@ftf font-family-rubik-medium @bdc bg-blue-primary bg-opacity-5 @pg px-3 py-2 @fts text-12px @wh w-fit @ttc text-blue-650 @brr rounded-8px @pn relative"
      }
    >
      {text}
      {image && (
        <div
          className={
            "@pn absolute right-0 top-0 w-7 h-7 ring-gray-200 rounded-full ring-1 bg-white text-lg flex items-center justify-center transform -translate-y-1/2 translate-x-1/2"
          }
        >
          <img className={'w-5'} src={image} />
        </div>
      )}
    </div>
  );
};

export default Badge;

