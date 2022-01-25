import React from "react";
import useStyleRewriter from "../../../functions/hooks/use-style-rewriter";

const Row = ({ className, children }) => {
  const srClasses = useStyleRewriter(baseClasses, className);

  return <div className={srClasses}>{children}</div>;
};

export default Row;

const baseClasses = "@dy flex @ani items-center @pg px-4 @fxw flex-wrap ";
