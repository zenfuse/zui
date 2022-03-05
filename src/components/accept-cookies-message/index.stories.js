import React from "react";
import AcceptCookiesMessage from "./index";

export default {
  component: AcceptCookiesMessage,
  title: "Components/AcceptCookiesMessage",
  decorators: [
    (story) => (
      <div className="w-full mx-auto container flex items-center justify-center mt-40">
        {story()}
      </div>
    ),
  ],
};

const Template = (args) => <AcceptCookiesMessage {...args} />;

export const Default = Template.bind({});

Default.args = {};
