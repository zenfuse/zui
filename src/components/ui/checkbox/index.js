import React from "react";
import AllIcons from "../all-icons";
import useStyleRewriter from "../../../functions/hooks/use-style-rewriter";

const Checkbox = ({
  active,
  icon = "Check",
  onChange,
  className = "",
  id = null,
  activeClassName = "",
  readOnly = false,
}) => {
  const srClasses = useStyleRewriter(baseClasses, className);
  const activeSrClasses = useStyleRewriter(baseActiveClasses, activeClassName);

  return (
    <label
      htmlFor={id}
      className={`${srClasses} ${active ? activeSrClasses : ""}`}
    >
      {active ? (
        <AllIcons name={icon} className="w-2/3 @ttc text-white" />
      ) : null}
      <input
        type="checkbox"
        id={id}
        className="hidden"
        onChange={onChange}
        checked={active}
        readOnly={readOnly}
      />
    </label>
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
  @cr cursor-pointer
  @wh w-5
  @ht h-5
  @dy flex
  @ani items-center
  @jyc justify-center
`;

const baseActiveClasses = `
  @brc border-blue-base
  @bdc bg-blue-primary dark:bg-blue-600
`;
