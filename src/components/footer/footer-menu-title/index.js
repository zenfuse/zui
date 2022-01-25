import H4 from "../../ui/typography/h4";

const FooterMenuTitle = ({ title }) => (
  <div className="w-fit">
    <H4 className="@ftf font-family-rubik-medium @ttc text-current @fts text-18px @leh leading-20px">
      {title}
    </H4>
  </div>
);

export default FooterMenuTitle;
