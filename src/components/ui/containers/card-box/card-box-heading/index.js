import H4 from "../../../typography/h4";
import P from "../../../typography/p";

const CardBoxHeading = ({ title, subtitle }) => {
  return (
    <>
      <div className="mb-1">
        <H4 className="@ftf font-family-inter-medium">{title}</H4>
      </div>
      {subtitle && (
        <div>
          <P className="@ttc text-gray-blue">{subtitle}</P>
        </div>
      )}
    </>
  );
};

export default CardBoxHeading;
