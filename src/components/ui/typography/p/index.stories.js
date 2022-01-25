import React from "react";
import P from "./index";

export default {
  component: P,
  title: "UI/Typography/P",
};

const Template = (args) => (
  <P className={args.className} variant={args.variant}>
    {args.children}
  </P>
);

export const Default = Template.bind({});

Default.args = {
  children: "Paragraph",
};

export const Variant1 = Template.bind({});

Variant1.args = {
  children: "Paragraph",
  variant: "1",
};

export const Variant2 = Template.bind({});

Variant2.args = {
  children: "Paragraph",
  variant: "2",
};

export const Variant3 = Template.bind({});

Variant3.args = {
  children: "Paragraph",
  variant: "3",
};

export const Variant4 = Template.bind({});

Variant4.args = {
  children: "Paragraph",
  variant: "4",
};

export const Variant5 = Template.bind({});

Variant5.args = {
  children: "Paragraph",
  variant: "5",
};
