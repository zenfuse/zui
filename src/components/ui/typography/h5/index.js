import React from "react";
import useStyleRewriter from "../../../../functions/hooks/use-style-rewriter";

const H5 = ({ children = "", className = "", type }) => {
  const srClasses = useStyleRewriter(baseClasses, className);

  return <h5 className={srClasses}>{children}</h5>;
};

export default H5;
const baseClasses =
  "@ftf font-family-inter-medium @fts text-sm @tta text-left @vla align-top @leh leading-5 @ttc text-black";
