import React from "react";
import useStyleRewriter from "../../../../functions/hooks/use-style-rewriter";

const H4 = ({ children = "", className = "" }) => {
  const srClasses = useStyleRewriter(baseClasses, className);

  return <h4 className={srClasses}>{children}</h4>;
};

export default H4;

const baseClasses =
  "@ftf font-family-inter-medium @fts text-base md:text-lg @tta text-left @vla align-top @leh leading-22px md:leading-6 @ttc text-black";
