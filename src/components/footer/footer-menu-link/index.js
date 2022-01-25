import Link from "next/link";
import P from "../../ui/typography/p";
import PlainDiv from "../../ui/plain-div";
import { getLinkTo } from "../../../functions/utils/vanilla-utils";
import { getSrc } from "../../../functions/utils/vanilla-utils";
import * as R from "ramda";

const FooterMenuLink = ({
  linkTitle,
  linkTo,
  linkIcon,
  className,
  baseUrl = "",
  linkProps,
}) => {
  const Element = linkTo ? Link : PlainDiv;

  const href = getLinkTo({ baseUrl, linkTo });

  const linkAttributes = createLinkAttributes(linkProps);

  return (
    <div className={`w-fit flex items-center ${className}`}>
      {linkIcon ? (
        <img
          className="w-4 mr-1"
          src={getSrc(linkIcon)}
          style={{ marginBottom: "3px" }}
        />
      ) : null}
      {linkTitle ? (
        <Element href={href} passHref>
          <a {...linkAttributes}>
            <P
              className={`@ttc text-current @fts text-14px @leh leading-20px @ftf font-family-rubik @ttc text-true-gray-450 ${
                href ? "hover:text-black duration-200" : ""
              }`}
              variant="sm"
            >
              {linkTitle}
            </P>
          </a>
        </Element>
      ) : null}
    </div>
  );
};

export default FooterMenuLink;

const createLinkAttributes = (linkProps) => {
  let linkAttributes = [];

  if (!R.isEmpty(linkProps) && linkProps) {
    linkAttributes = linkProps.map(({ name, value }) => [name, value]);
    linkAttributes = Object.fromEntries(linkAttributes);
  }

  return linkAttributes;
};
