import Link from "next/link";
import { getLinkTo } from "../../../functions/utils/vanilla-utils";
import { getSrc } from "../../../functions/utils/vanilla-utils";

const createLinkAttributes = (linkProps) => {
  let linkAttributes = [];

  if (linkProps?.length) {
    linkAttributes = linkProps.map(({ name, value }) => [name, value]);
    linkAttributes = Object.fromEntries(linkAttributes);
  }

  return linkAttributes;
};

const FooterMenuLink = ({
  linkTitle,
  linkTo,
  linkIcon,
  className,
  baseUrl = "",
  linkProps,
}) => {
  const href = getLinkTo({ baseUrl, linkTo });

  const linkAttributes = createLinkAttributes(linkProps);

  return (
    <div className="w-fit flex items-center">
      {linkIcon ? (
        <img
          className="w-4 mr-1"
          src={getSrc(linkIcon)}
          style={{ marginBottom: "3px" }}
        />
      ) : null}
      {linkTitle ? (
        <Link href={href} passHref>
          <a {...linkAttributes}>
            <p
              className={`text-14px leading-20px font-family-rubik text-true-gray-450 duration-200 ${
                href ? "hover:text-black dark:hover:text-white" : ""
              }`}
              variant="sm"
            >
              {linkTitle}
            </p>
          </a>
        </Link>
      ) : null}
    </div>
  );
};

export default FooterMenuLink;
