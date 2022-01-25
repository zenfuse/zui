import React from "react";
import { withNextRouter } from "storybook-addon-next-router";

import ZenfuseUi from "./index";

export default {
  component: ZenfuseUi,
  title: "Components/ZenfuseUi",
  decorators: [
    withNextRouter,
    (story) => (
      <div className="w-full mx-auto container flex items-center justify-center mt-40">
        {story()}
      </div>
    ),
  ],
};

const Template = (args) => <ZenfuseUi {...args} />;

export const Default = Template.bind({});

Default.args = {
  colors: [
    { className: "true-gray-950", hexCode: "#101010" },
    { className: "true-gray-900", hexCode: "#171717" },
    { className: "true-gray-850", hexCode: "#1D1D1D" },
    { className: "true-gray-800", hexCode: "#232323" },
    { className: "true-gray-750", hexCode: "#2F2F2F" },
    { className: "true-gray-700", hexCode: "#3B3B3B" },
    { className: "true-gray-450", hexCode: "#999999" },
    { className: "true-gray-300", hexCode: "#D4D4D4" },
    { className: "true-gray-150", hexCode: "#EBEBEB" },
    { className: "true-gray-100", hexCode: "#F5F5F5" },
    { className: "cool-gray-150", hexCode: "#F1F2F6" },
    { className: "blue-650", hexCode: "#0065FF" },
    { className: "blue-600", hexCode: "#2078FF" },
    { className: "green-450", hexCode: "#1CC760" },
    { className: "red-550", hexCode: "#E94D3D" },
    { className: "amber-550", hexCode: "#FF991D" },
    { className: "amber-250", hexCode: "#FEDA5C" },
  ],
  darkShadows: [
    { className: "dark-shadow-100" },
    { className: "dark-shadow-200" },
    { className: "dark-shadow-400" },
    { className: "dark-shadow-800" },
    { className: "dark-shadow-900" },
  ],
  isDark: false,
};
