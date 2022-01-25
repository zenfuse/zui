import React from "react";
import useStyleRewriter from "../../../functions/hooks/use-style-rewriter";

const Section = ({ className, children, sectionRef = null }) => {
  const srClasses = useStyleRewriter(baseClasses, className);

  return (
    <section ref={sectionRef} className={srClasses}>
      {children}
    </section>
  );
};

export default Section;

const baseClasses = "@ow overflow-hidden @pn relative @wh w-full";
