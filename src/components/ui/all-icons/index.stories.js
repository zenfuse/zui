import React from "react";
import AllIcons from ".";
import { icons } from "./index";

export default {
  component: AllIcons,
  title: "UI/AllIcons",
  decorators: [
    (story) => <div className="w-full flex flex-col">{story()}</div>,
  ],
};

const Template = (args) => (
  <div className="">
    {Object.keys(icons).map((icon) => {
      return (
        <div className="flex flex-row pb-3 items-center" key={icon}>
          <AllIcons {...args} name={icon} />
          <span className="ml-2">{icon}</span>
        </div>
      );
    })}
  </div>
);

export const Default = Template.bind({});

Default.args = {
  className: "w-10 h-10 text-black",
  imageClassName: "",
};
