import React, { useMemo } from "react";
import useStyleRewriter from "../../../../functions/hooks/use-style-rewriter";

const P = ({ className, children, variant }) => {
  const baseClasses = useMemo(() => {
    if (variant === "1") {
      return `@ftf font-family-inter @fts text-sm @tta text-left @vla align-top @leh leading-5 @ttc text-black`;
    } else if (variant === "2") {
      return `@ftf font-family-inter-semi-bold @fts text-xs @tta text-left @vla align-top @leh leading-18px @ttc text-black`;
    } else if (variant === "3") {
      return `@ftf font-family-inter-medium @fts text-xs @tta text-left @vla align-top @leh leading-18px @ttc text-black`;
    } else if (variant === "4") {
      return `@ftf font-family-inter @fts text-xs @tta text-left @vla align-top @leh leading-18px @ttc text-black`;
    } else if (variant === "5") {
      return `@ftf font-family-inter-medium @fts text-10px @tta text-left @vla align-top @leh leading-14px @ttc text-black`;
    } else if (variant === "button") {
      return `
      @ftf font-family-inter
      @fts text-14px
      @leh leading-20px`;
    } else if (variant === "large") {
      return `
      @ftf font-family-inter
      @fts text-14px
      @leh leading-20px`;
    } else if (variant === "medium") {
      return `
      @ftf font-family-inter
      @fts text-12px
      @leh leading-18px`;
    } else if (variant === "small") {
      return `
      @ftf font-family-inter
      @fts text-10px
      @leh leading-12px`;
    } else {
      return `
      @ftf font-family-inter
      @fts text-12px
      @leh leading-18px`;
    }
  }, []);
  const srClasses = useStyleRewriter(baseClasses, className);

  return (
    <>
      <p className={srClasses}>{children}</p>
    </>
  );
};

export default P;
