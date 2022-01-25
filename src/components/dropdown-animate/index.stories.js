import React, { useState } from 'react'
import { withNextRouter } from "storybook-addon-next-router";
import DropdownAnimate from "./index";
import SmartButton from "../smart-button";

export default {
  component: DropdownAnimate,
  title: "Animations/Dropdown",
  decorators: [
    withNextRouter,
    (story) => <div className="w-64 mx-auto mt-40">{story()}</div>,
  ],
};

const DropdownItems = () => {
  return (
    <div className={"bg-blue-100"}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
  );
};

const ButtonToggle = (args) => {
  const [show, setShow] = useState(args.show)
  return (
    <>
      <SmartButton onClick={() => setShow(!show)} variant={"primary"}>
        Open dropdown
      </SmartButton>
      <DropdownAnimate {...args} show={show}>
        <DropdownItems />
      </DropdownAnimate>
    </>
  );
};

const Template = (args) => <ButtonToggle {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <DropdownItems />,
  show: false,
};

