import FooterMenuTitle from "../footer-menu-title";
import FooterMenuLink from "../footer-menu-link";
import * as R from "ramda";

const FooterColumn = ({ title, links, baseUrl = "" }) => (
  <div className="flex flex-col">
    <FooterMenuTitle title={title} />
    {links && !R.isEmpty(links) ? (
      <div className="w-full flex flex-col gap-2 mt-5">
        {links.map((item, index) => (
          <FooterMenuLink {...item} baseUrl={baseUrl} key={index} />
        ))}
      </div>
    ) : null}
  </div>
);

export default FooterColumn;
