import React, { useMemo } from "react";
import useStyleRewriter from "../../../../functions/hooks/use-style-rewriter";

const CardBox = ({ children, variant = "", className }) => {
  const baseClasses = useMemo(() => {
    return `@bdc bg-white @pn relative @brw border-px @pg p-4 md:p-8 @brr rounded-12px @bxsw shadow-small @wh w-full`;
  }, []);

  const srClasses = useStyleRewriter(baseClasses, className);

  return <div className={srClasses}>{children}</div>;
};

export default CardBox;
