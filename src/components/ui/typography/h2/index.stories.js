import React from "react";
import H2 from "./index";

export default {
  component: H2,
  title: "UI/Typography/H2",
};

const Template = (args) => <H2 className={args.className}>{args.children}</H2>;

export const Default = Template.bind({});

Default.args = {
  children: "Heading 2",
};
