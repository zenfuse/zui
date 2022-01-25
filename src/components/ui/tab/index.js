import SmartButton from "../../smart-button";
import SvgParser from "../../svg-parser";

const Tab = ({
  title,
  icon,
  localIcon,
  isActive,
  setIsActive,
  index,
  width,
}) => {
  return (
    <div
      className={"flex items-center justify-center py-3"}
      style={{ width: `${width}%` }}
    >
      <SmartButton
        onClick={() => setIsActive(index)}
        className={`${
          isActive ? "@ttc text-true-gray-850" : "@ttc text-true-gray-450 "
        } @fx flex @ani items-center @ftf font-family-rubik-medium cursor-pointer w-full justify-center whitespace-nowrap`}
      >
        {!localIcon ? (
          <SvgParser
            containerClasses={"@wh w-5 @ht h-5 mx-2"}
            svgClasses={"w-5"}
            image={icon}
          />
        ) : (
          <img src={localIcon} className={"@wh w-5 @ht h-5 mx-2"} />
        )}
        {title}
      </SmartButton>
    </div>
  );
};

export default Tab;
