import React from "react";
import FixedLinksBar from "./index";

export default {
  component: FixedLinksBar,
  title: "Components/FixedLinksBar",
  decorators: [(story) => <div className="">{story()}</div>],
};

const Template = (args) => <FixedLinksBar {...args} />;

export const Default = Template.bind({});

Default.args = {};
