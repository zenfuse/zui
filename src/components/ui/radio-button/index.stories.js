import React, { useState } from "react";
import RadioButton from ".";

export default {
  component: RadioButton,
  title: "UI/RadioButton",
  decorators: [
    (story) => <div className="w-full flex flex-col">{story()}</div>,
  ],
};
const Template = (args) => {
  const [active, setActive] = useState(args.active);
  return (
    <div className="w-screen h-screen bg-black  dark flex items-center justify-center">
      <div className="w-8">
        <RadioButton
          {...args}
          active={active}
          onClick={() => setActive(!active)}
        />
      </div>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  active: true,
};

export const Danger = Template.bind({});

Danger.args = {
  active: true,
  activeColor: "red-base",
};
