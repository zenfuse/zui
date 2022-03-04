import { getSrc } from "../../../functions/utils/vanilla-utils";

const ExchangeItem = ({ icon, title, iconClasses = `` }) => {
  const itemTitle = title && title.toLowerCase();

  return (
    <div className="flex items-center gap-1 hover:cursor-default">
      {icon ? (
        <img
          alt={icon.alt || null}
          src={getSrc(icon)}
          className={`${iconClasses} object-contain object-center w-4 h-4 ${
            itemTitle === `uniswap` ? `transform -translate-y-0.5` : ""
          }`}
        />
      ) : null}
      {title ? (
        <span className="font-family-rubik-medium text-12px align-middle uppercase whitespace-nowrap">
          {title}
        </span>
      ) : null}
    </div>
  );
};

export default ExchangeItem;
