import React from "react";

import useStyleRewriter from "../../../functions/hooks/use-style-rewriter";

const NotificationOutline = ({
  children,
  className = "",
  containerClassName = "",
}) => {
  const srClasses = useStyleRewriter(baseClasses, className);
  const containerSrClasses = useStyleRewriter(
    containerBaseClasses,
    containerClassName
  );

  return (
    <div className={srClasses}>
      <div className={containerSrClasses}>{children}</div>
    </div>
  );
};

export default NotificationOutline;

const baseClasses = `@pn absolute
  @bdc bg-white
  @brc border-blue-primary
  @bro border-opacity-70
  @brw border-px
  @mn mt-3
  @brr rounded-8px
  @bxsw shadow-blue-outline
  @wh md:w-4/5`;

const containerBaseClasses = `
  @pn px-8 py-4
  @tta text-center 
  @wh w-full`;
