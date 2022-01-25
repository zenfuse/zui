import React from "react";

import AllIcons from "../all-icons";
import useStyleRewriter from "../../../functions/hooks/use-style-rewriter";

const Checkbox = ({
  active,
  icon = "Check",
  onChange = () => console.log("Checkbox -> onChange"),
  className = "",
  id = null,
  activeClassName = "",
}) => {
  const srClasses = useStyleRewriter(baseClasses, className);
  const activeSrClasses = useStyleRewriter(baseActiveClasses, activeClassName);

  return (
    <>
      <label
        htmlFor={id}
        className={`${srClasses} ${active ? activeSrClasses : null}`}
      >
        <div className="w-full pb-full relative">
          <div className="absolute flex items-center justify-center inset-0">
            {active ? (
              <AllIcons name={icon} className="@wh w-2/3 @ttc text-white" />
            ) : null}
          </div>
        </div>
      </label>
      <input
        type="checkbox"
        id={id}
        className="hidden"
        onChange={onChange}
        checked={active}
      />
    </>
  );
};

export default Checkbox;

const baseClasses = `
  @dy block
  @brw border
  @ow overflow-hidden
  @brr rounded-4px
  @bxsw shadow-sm hover:shadow-blue-outline
  @brc border-gray-light hover:border-blue-base dark:hover:border-blue-600
  @tndn duration-200
  @cr cursor-pointer`;

const baseActiveClasses = `
  @brc border-blue-base
  @bdc bg-blue-primary dark:bg-blue-600
`;
