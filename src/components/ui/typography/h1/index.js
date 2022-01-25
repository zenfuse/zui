import React from "react";
import useStyleRewriter from "../../../../functions/hooks/use-style-rewriter";

const H1 = ({ children = "", className = "", type }) => {
  const srClasses = useStyleRewriter(baseClasses, className);

  return <h1 className={srClasses}>{children}</h1>;
};

export default H1;

const baseClasses =
  "@ftf font-family-inter-bold @fts text-2xl md:text-26px @tta text-left @vla align-top @leh leading-30px @ttc text-black";
