import React, { useState } from "react";
import Checkbox from ".";

export default {
  component: Checkbox,
  title: "UI/Checkbox",
  decorators: [
    (story) => <div className="w-full flex flex-col">{story()}</div>,
  ],
};
const Template = (args) => {
  const [active, setActive] = useState(args.active);
  return (
    <div className="w-20 dark">
      <Checkbox {...args} active={active} onChange={() => setActive(!active)} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  id: "checkbox",
  active: true,
};

export const Danger = Template.bind({});

Danger.args = {
  active: true,
  id: "checkbox",
  className: "@bxsw hover:shadow-red-outline @brc hover:border-red-base",
  activeClassName: "@bdc bg-red-base @brc border-red-base",
};
