import { getSrc } from "../../../functions/utils/vanilla-utils";
import AllIcons from "../../ui/all-icons";
import Link from "next/link";

const pairLinkStyle = {
  border: `1px solid #DEDEDE`,
  background: `rgba(255, 255, 255, 0.8)`,
  boxSizing: `border-box`,
  backdropFilter: `blur(6px)`,
};

const PairLink = ({
  icon,
  linkTitle,
  linkTo,
  iconClasses = ``,
  linkClasses = `bg-blue-bibox mr-2`,
}) => (
  <Link href={linkTo} passHref>
    <a
      target="_blank"
      draggable={false}
      className={`${linkClasses} button flex gap-2 transition-none font-family-rubik items-center p-2 relative rounded-full mt-1 w-fit overflow-hidden`}
      rel="noreferrer"
      style={pairLinkStyle}
    >
      <div className="w-5 h-5 z-40 relative">
        <img
          alt={icon.alt || null}
          src={getSrc(icon)}
          className={`${iconClasses} object-contain`}
        />
      </div>
      <p
        className="font-family-rubik-medium text-12px text-true-gray-850 uppercase"
        style={{ whiteSpace: `nowrap` }}
      >
        {linkTitle}
      </p>
      <AllIcons
        name="ExternalLink"
        className="w-4 -translate-y-1 text-true-gray-450"
      />
    </a>
  </Link>
);

export default PairLink;
