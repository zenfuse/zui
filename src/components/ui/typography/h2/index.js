import React from "react";
import useStyleRewriter from "../../../../functions/hooks/use-style-rewriter";

const H2 = ({ children = "", className = "", type }) => {
  const srClasses = useStyleRewriter(baseClasses, className);

  return <h2 className={srClasses}>{children}</h2>;
};

export default H2;

const baseClasses =
  "@ftf font-family-inter-medium @fts text-22px md:text-2xl @tta text-left @vla align-top @leh leading-26px md:leading-7 @ttc text-black";
