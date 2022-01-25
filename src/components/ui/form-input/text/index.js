import React from 'react'
import InputHeading from "../../../input/input-heading";
import * as R from "ramda";
import InputError from "../../../input/input-error";
import Input from "../../../input";
import Button from '../../../smart-button'
import AllIcons from "../../all-icons";
import useStyleRewriter from "../../../../functions/hooks/use-style-rewriter";

const Text = (props) => {
  const {
    label,
    error,
    value,
    id,
    onChange,
    placeholder,
    type,
    blocked,
    changeType = () => {},
    enableTypeChanging = false,
    inputContainerClasses = "",
    UnderInput,
    headingProps,
    inputsClassName,
    Icon,
  } = props;
  const srClasses = useStyleRewriter(
    baseInputContainerClasses,
    inputContainerClasses
  );

  return (
    <>
      <div className="flex justify-between">
        {label && (
          <InputHeading
            title={label}
            className={error ? "@wh w-fit" : ""}
            buttonTitle={
              error && R.prop("buttonTitle", headingProps)
            }
            onButtonClick={
              R.prop("onButtonClick", headingProps)
                ? () => headingProps.onButtonClick(props)
                : undefined
            }
          />
        )}
        {error && <InputError error={error} />}
      </div>
      <div className={srClasses}>
        <Input
          value={value}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          blocked={blocked}
          Icon={Icon}
          className={inputsClassName}
        />
        {enableTypeChanging ? (
          <Button
            variant="text"
            className="@pn absolute @it right-3 top-3 group"
            onClick={(e) => changeType(e, { field: id })}
          >
            <AllIcons
              name="Unhide"
              className="@wh w-6 @ttc text-gray-primary group-hover:text-blue-primary-dark @tndn duration-200"
            />
          </Button>
        ) : null}
        {UnderInput ? <UnderInput {...props} /> : null}
      </div>
    </>
  );
};

export default Text;

const baseInputContainerClasses = "@mn mb-4 @pn relative";