import React from "react";
import Tab from './index'

export default {
  component: Tab,
  title: `Components/Ui/Tab`,
};

const Template = (args) => (
  <div className="w-3/5 mx-auto mt-12 h-400px">
    <Tab {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: "Overview",
  icon: "/assets/images/icons/garage.svg",
  isActive: true
};
