import React from "react";
import AbsoluteImage from ".";

export default {
  component: AbsoluteImage,
  title: "UI/AbsoluteImage",
  decorators: [
    (story) => <div className="w-1/4 mx-auto mt-10 relative">{story()}</div>,
  ],
};

const Template = (args) => (
  <AbsoluteImage src="https://images.pexels.com/photos/1695050/pexels-photo-1695050.jpeg" />
);

export const Default = Template.bind({});

Default.args = {
  className: "",
  imageClassName: "",
};
