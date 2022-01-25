import React from "react";
import useStyleRewriter from "../../../../functions/hooks/use-style-rewriter";

const H3 = ({ children = "", className = "", type }) => {
  const srClasses = useStyleRewriter(baseClasses, className);

  return <h3 className={srClasses}>{children}</h3>;
};

export default H3;

const baseClasses =
  " @ftf font-family-inter-medium @fts text-xl md:text-22px @tta text-left @vla align-top @leh leading-6 md:leading-27px @ttc text-black";
