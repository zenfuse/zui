import React from "react";
import P from "../../ui/typography/p";

const InputError = ({ error, className = baseClasses }) => {
  return <P className={`${baseClasses} ${className}`}>{error.message}</P>;
};

export default InputError;

const baseClasses =
  "@ttc text-red-base @fts text-10px @ttt normal-case @wh w-fit @leh leading-none";
