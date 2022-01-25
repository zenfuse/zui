import React from "react";
import useStyleRewriter from "../../../functions/hooks/use-style-rewriter";

const Container = ({ className, children }) => {
  const srClasses = useStyleRewriter(baseClasses, className);

  return <div className={srClasses}>{children}</div>;
};

export default Container;

const baseClasses = "container @mn mx-auto @ow overflow-visible @pn relative";
