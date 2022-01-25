import { getSrc } from "./get-src";
import { GTMPageView } from "./gtm";
import { loadScripts } from "./loadScripts";
import getFormattedPrice from "./formatters/get-formatted-price";

const getLinkTo = ({ linkTo, baseUrl }) => {
  if (linkTo && linkTo.startsWith("/")) {
    return `${baseUrl}${linkTo}`;
  }
  return linkTo;
};

export { getSrc, GTMPageView, loadScripts, getLinkTo, getFormattedPrice };
