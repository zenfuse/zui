import React from "react";
import H5 from "./index";

export default {
  component: H5,
  title: "UI/Typography/H5",
};

const Template = (args) => <H5 className={args.className}>{args.children}</H5>;

export const Default = Template.bind({});

Default.args = {
  children: "Heading 5",
};
