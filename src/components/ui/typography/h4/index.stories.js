import React from "react";
import H4 from "./index";

export default {
  component: H4,
  title: "UI/Typography/H4",
};

const Template = (args) => <H4 className={args.className}>{args.children}</H4>;

export const Default = Template.bind({});

Default.args = {
  children: "Heading 4",
};
