import React from "react";
import TabsArray from "./index";

export default {
  component: TabsArray,
  title: `Components/TabsArray`,
};

const Template = (args) => {
  return (
    <div className="w-3/5 mx-auto mt-12 h-400px">
      <TabsArray {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  tabs: [
    {
      title: "Overview",
      icon: "/assets/images/icons/garage.svg",
    },
    {
      title: "Trading",
      icon: "/assets/images/icons/trading.svg",
    },
    {
      title: "Panic Sell",
      icon: "/assets/images/icons/panic-sell.svg",
    },
    {
      title: "Profile",
      icon: "/assets/images/icons/profile.svg",
    },
  ],
  active: 0,
};
