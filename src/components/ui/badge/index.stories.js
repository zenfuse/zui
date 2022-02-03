import React from "react";
import Badge from "./index";

export default {
  component: Badge,
  title: "UI/Badge",
  decorators: [
    (story) => <div className="w-full flex flex-col">{story()}</div>,
  ],
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "LEON VERSION COMING SOON",
  image: "/assets/images/lion.png",
};
