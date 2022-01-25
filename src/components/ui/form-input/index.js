import React from "react";
import Checkbox from "./checkbox/index";
import Text from "./text/index";
import Range from "./range/index";
import useStyleRewriter from "../../../functions/hooks/use-style-rewriter";
import { useMemo } from "react";

const FormInput = (props) => {
  const { type, inputContainerClasses } = props;

  const srClasses = useStyleRewriter(
    baseInputContainerClasses,
    inputContainerClasses
  );

  const InputType = useMemo(() => {
    switch (type) {
      case "text":
        return Text;
      case "checkbox":
        return Checkbox;
      case "range":
        return Range;
      default:
        return Text;
    }
  }, [type]);

  return <InputType {...props} srClasses={srClasses} />;
};

export default FormInput;

const baseInputContainerClasses = "@mn mb-4 @pn relative";
