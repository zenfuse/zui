import React, { useRef } from "react";
import SmartButton from "./index";
import useDetectOutsideClick from "../../functions/hooks/use-detect-outsideclick";

export default {
  component: SmartButton,
  title: "Buttons/SmartButton",
  decorators: [
    (story) => <div className="w-fit mx-auto mt-40">{story()}</div>,
  ],
};

const DropdownItems = ({ setIsDropdownOpen }) => {
  // console.log("setIsDropdownOpen", setIsDropdownOpen);
  const dd = useRef(null);
  // const [isActive] = useDetectOutsideClick(dd, true);

  // console.log("useDetectOutsideClick isActive", isActive);

  return (
    <div ref={dd} className="w-full text-black py-1 cursor-default">
      <SmartButton variant="primary" className="@mn mx-1 mb-1">
        <span>Button</span>
      </SmartButton>
      <SmartButton variant="primary" className="@mn mx-1 mb-1">
        <span>Button</span>
      </SmartButton>
      <SmartButton variant="primary" className="@mn mx-1 mb-1">
        <span>Button</span>
      </SmartButton>
      <SmartButton variant="primary" className="@mn mx-1">
        <span>Button</span>
      </SmartButton>
    </div>
  );
};

const TooltipItems = () => {
  return <span>Tooltip Item</span>;
};

const Template = (args) => (
  <SmartButton {...args}>
    <span className="font-family-rubik">Smart Button</span>
  </SmartButton>
);

export const Default = Template.bind({});

Default.args = {
  variant: "primary",
  className: "",
  tooltipPosition: "left-bottom",
  dropdownContainerClasses: "@it left-1 top-full",
  tooltipItems: TooltipItems,
  tooltipContainerClasses:
    "@it left-0 bottom-full @mn mb-4 transform origin-left",
  onClick: (e) => console.log(e),
};

const DropdownTemplate = (args) => {
  return (
    <SmartButton {...args}>
      <span className="font-family-rubik">Smart Button</span>
    </SmartButton>
  );
};

export const Dropdown = DropdownTemplate.bind({});

Dropdown.args = {
  variant: "primary",
  className: "",
  dropdownContainerClasses: "@it left-1 top-full",
  dropdownItems: DropdownItems,
  tooltipItems: TooltipItems,
  tooltipContainerClasses: "@it left-5 bottom-full @mn mb-1",
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...Default.args,
  disabled: true,
};
