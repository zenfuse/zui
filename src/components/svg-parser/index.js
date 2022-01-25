import React, { useEffect, useRef, useState } from "react";
import { kebabToCamel } from "../../functions/utils/string-utils";
import useStyleRewriter from "../../functions/hooks/use-style-rewriter";
import { Parser } from "html-to-react";
const htmlToReactParser = new Parser();

const SvgParser = ({ image, containerClasses, svgClasses }) => {
  const [svg, setSvg] = useState(null);
  const svgContainerRef = useRef(null);

  const containerSrClasses = useStyleRewriter(
    containerBaseClasses,
    containerClasses
  );
  const svgSrClasses = useStyleRewriter(svgBaseClasses, svgClasses);

  useEffect(() => {
    if (image) {
      fetch(image)
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);

          return res.text();
        })
        .then((res) => {
          const htmlString = res
            .replace(/\n/g, "")
            .replace(/([A-z-]+)=['"]/g, kebabToCamel);
          const reactSvg = htmlToReactParser.parse(htmlString);
          setSvg(reactSvg);
        })
        .catch((err) => console.error("Error in Clients Block", err));
    }
  }, []);

  useEffect(() => {
    if (svg && svgContainerRef.current) {
      let svgNode = svgContainerRef.current.querySelector("#svg > svg");

      svgNode.removeAttribute("width");
      svgNode.removeAttribute("height");

      Array.from(svgNode.children).forEach((elem) => setCurrentColor(elem));

      svgNode.setAttribute(
        "class",
        `w-full h-full`
      );
    }
  }, [svg]);

  return (
    <div className={containerSrClasses} ref={svgContainerRef}>
      <div id="svg" className={svgSrClasses}>
        {svg}
      </div>
    </div>
  );
};

export default SvgParser;

const containerBaseClasses = `flex items-center justify-center`;

const svgBaseClasses = ``;

const setCurrentColor = (svgNode) => {
  let fillAttr = svgNode.getAttribute("fill");

  let strokeAttr = svgNode.getAttribute("stroke");

  if (fillAttr) svgNode.setAttribute("fill", "currentColor");

  if (strokeAttr) svgNode.setAttribute("stroke", "currentColor");

  let children = Array.from(svgNode.children);

  if (children.length) children.forEach(setCurrentColor);
};
