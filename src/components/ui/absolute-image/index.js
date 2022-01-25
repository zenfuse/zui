import React, { useMemo } from "react";
import * as R from "ramda";
import useStyleRewriter from "../../../functions/hooks/use-style-rewriter";

const AbsoluteImage = ({ className, imageClassName, src = "/" }) => {
  const srContainerClasses = useStyleRewriter(baseContainerClasses, className);
  const srImageClasses = useStyleRewriter(baseImageClasses, imageClassName);

  const srcPath = useMemo(() => R.propOr(src, "full")(src), [src]);

  return (
    <div className={srContainerClasses}>
      <img className={srImageClasses} src={srcPath} />
    </div>
  );
};

export default AbsoluteImage;

const baseContainerClasses =
  "@ow overflow-hidden @pn relative @wh w-full @pg pb-full";
const baseImageClasses =
  "@pn absolute @otf object-cover @wh w-full @ht h-full @otf object-center";
