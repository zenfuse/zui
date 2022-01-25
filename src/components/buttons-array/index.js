import React, { useRef } from "react";
import * as R from "ramda";
import Button from "../ui/buttons/button";
import SvgParser from "../svg-parser";
import { getSrc } from "../../functions/utils/vanilla-utils";
import AllIcons from "../ui/all-icons";
import useStyleRewriter from "../../functions/hooks/use-style-rewriter";

const ButtonsArray = ({ buttonsArray, containerClasses, query = "" }) => {
  const containerRef = useRef(null);

  const containerSrClasses = useStyleRewriter(
    containerBaseClasses,
    containerClasses
  );

  return (
    <div ref={containerRef} className={containerSrClasses}>
      {buttonsArray &&
        !R.isEmpty(buttonsArray) &&
        buttonsArray.map((item, index) => {
          const icon = R.prop("icon", item);
          const link = R.prop("link", item);
          const title = R.prop("title", item);
          const variant = R.prop("variant", item);
          const buttonClasses = R.prop("buttonClasses", item);
          const iconClasses = R.prop("iconClasses", item) || "";
          const withSvg = icon && getSrc(item.icon).endsWith("svg");
          const isIconString = typeof icon === "string" && !withSvg;
          const preventSvgParsing = R.prop("preventSvgParsing", item);

          return (
            <Button
              key={index}
              linkProps={R.prop("linkProps", item) || {}}
              disabled={R.prop("disabled", item)}
              variant={variant ? variant.replace("_", "-") : "primary"}
              link={link ? `${link}${query}` : null}
              className={buttonClasses || ""}
              title={title}
            >
              {title && <p className="mx-1">{item.title}</p>}
              {withSvg &&
                (!preventSvgParsing ? (
                  <SvgParser
                    containerClasses="@mn mx-1"
                    svgClasses={`@wh w-4 @dy block ${iconClasses}`}
                    image={getSrc(icon)}
                  />
                ) : (
                  <div className="mx-1">
                    <img
                      className={`w-4 h-4 @dy block ${iconClasses}`}
                      src={getSrc(icon)}
                    />
                  </div>
                ))}
              {isIconString && <AllIcons className="w-4 mx-1" name={icon} />}
            </Button>
          );
        })}
    </div>
  );
};

export default ButtonsArray;

const containerBaseClasses = `
  @dy flex 
  @gp gap-3
  @fxw flex-wrap
  @ani items-center
  @jyc justify-center
  @wh w-full
`;
