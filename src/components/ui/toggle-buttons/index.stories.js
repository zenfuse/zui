import React, { useState } from "react";
import ToggleButtons from "./index";
import AllIcons from "../all-icons";

export default {
  component: ToggleButtons,
  title: "UI/ToggleButtons",
  decorators: [
    (story) => <div className="w-full flex flex-col">{story()}</div>,
  ],
};

const twoButtons = [
  <AllIcons name="Light" className="w-6" />,
  <AllIcons name="Dark" className="w-6" />,
];

const textButtons = [
  <p className="font-family-inter text-12px">Portfolio</p>,
  <p classbName="font-family-inter text-12px">Coins</p>,
];

const Template = (args) => {
  const [activeIndex, setActiveIndex] = useState(args.activeIndex);
  return (
    <div className="w-fit dark">
      <ToggleButtons
        {...args}
        setActiveButton={(index) => setActiveIndex(index)}
        activeButton={activeIndex}
        buttons={args.buttons}
        variant={args.variant}
        inRow={args.inRow}
      />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  activeIndex: 0,
  buttons: twoButtons,
  inRow: false,
  variant: "icon",
};

export const Text = Template.bind({});

Text.args = {
  activeIndex: 0,
  buttons: textButtons,
  inRow: true,
};

const WithClassNameTemplate = (args) => {
  const [activeIndex, setActiveIndex] = useState(args.activeIndex);
  return (
    <ToggleButtons
      {...args}
      setActiveButton={(index) => setActiveIndex(index)}
      activeButton={activeIndex}
      buttons={args.buttons}
      variant={args.variant}
      inRow={args.inRow}
    />
  );
};

export const WithClassName = WithClassNameTemplate.bind({});

WithClassName.args = {
  activeIndex: 0,
  buttons: textButtons,
  inRow: true,
  className: "w-full",
  buttonClassName: "w-1/2"
};
