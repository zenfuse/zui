import Link from "next/link";
import * as R from "ramda";
import AllIcons from "../../all-icons";

const MultiIconsButton = ({ linkProps }) => {
  const links = linkProps ? linkProps.slice(0, 5) : null;

  return (
    <div className="flex gap-3">
      {links &&
        !R.isEmpty(links) &&
        links.map((item, index) => (
          <Link href={item.value} key={index} passHref>
            <a target="_blank" className="col-span-1">
              <AllIcons
                className="w-6 h-6 transform duration-200 hover:scale-110"
                name={item.name}
              />
            </a>
          </Link>
        ))}
    </div>
  );
};

export default MultiIconsButton;
