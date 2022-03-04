import React from "react";
import TextArea from "./index";

export default {
  component: TextArea,
  title: "Forms/TextArea",
  decorators: [
    (story) => (
      <div className="w-screen h-screen mx-auto container flex items-center justify-center">
        <div className="w-64 mx-auto">{story()}</div>
      </div>
    ),
  ],
};

const Template = (args) => <TextArea {...args} />;

export const Default = Template.bind({});

Default.args = {};
