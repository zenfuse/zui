import React from "react";
import H1 from "./index";

export default {
  component: H1,
  title: "UI/Typography/H1",
};

const Template = (args) => <H1 className={args.className}>{args.children}</H1>;

export const Default = Template.bind({});

Default.args = {
  children: "Heading 1",
};
