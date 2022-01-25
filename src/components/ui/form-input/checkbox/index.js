import React from 'react'
import P from "../../typography/p";
import Button from "../../../smart-button";
import Checkbox from "../../checkbox";

const CheckboxItem = (props) => {
  const { value, id, error, onChange } = props;
  return (
    <div className="flex flex-row items-center mb-6">
      <div className="w-5 mr-2">
        <Checkbox
          active={value}
          id={id}
          className={`${
            error
              ? "@bxsw shadow-red-outline @brc border-red-base"
              : ""
          }`}
          onChange={onChange}
        />
      </div>
      <div>
        <P>
          I agree to the{" "}
          <Button
            href="/terms-of-use"
            className="text-blue-primary hover:text-black duration-200"
          >
            Terms of Use
          </Button>{" "}
          &{" "}
          <Button
            href="/privacy-policy"
            className="text-blue-primary hover:text-black duration-200"
          >
            Privacy Policy
          </Button>
          .
        </P>
      </div>
    </div>
  );
};

export default CheckboxItem;
