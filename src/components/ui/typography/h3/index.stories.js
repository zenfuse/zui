import React from "react";
import H3 from "./index";

export default {
  component: H3,
  title: "UI/Typography/H3",
};

const Template = (args) => <H3 className={args.className}>{args.children}</H3>;

export const Default = Template.bind({});

Default.args = {
  children: "Heading 3",
};
