import React from "react";
import ButtonsArray from "./index";

export default {
  component: ButtonsArray,
  title: "Components/ButtonsArray",
  decorators: [
    (story) => (
      <div className="w-full mx-auto container flex items-center justify-center mt-40">
        {story()}
      </div>
    ),
  ],
};

const Template = (args) => <ButtonsArray {...args} />;

export const Default = Template.bind({});

Default.args = {
  buttonsArray: [
    {
      variant: "gray_solid",
      title: "Gray Solid",
      link: "https://zenfuse.io",
      linkProps: [
        {
          name: "target",
          value: "blank",
        },
      ],
      icon: "Twitter",
    },
    {
      variant: "transparent",
      title: "Transparent",
      icon: "Twitter",
    },
    {
      variant: "primary_outline",
      title: "Primary Outline",
      icon: "Twitter",
    },
    {
      variant: "transparent_outline",
      title: "Transparent Outline",
      icon: "Twitter",
    },
    {
      variant: "primary",
      title: "Primary",
      icon: "Twitter",
    },
    {
      variant: "circle_outline",
      title: "Circle Outline",
      icon: "Twitter",
    },
    {
      variant: "blur_primary",
      title: "More about token",
      icon: "Twitter",
    },
    {
      variant: "text",
      title: "hr@zenfuse.io",
      icon: "Mail",
      link: "https://zenfuse.io",
      linkProps: [
        {
          name: "target",
          value: "blank",
        },
      ],
    },
    {
      variant: "confetti",
      title: "I want to join the team!",
      link: "https://zenfuse.io",
      linkProps: [
        {
          name: "target",
          value: "blank",
        },
      ],
    },
    {
      variant: "multi_icons",
      linkProps: [
        {
          name: "RussianFlag",
          value: "/",
        },
        {
          name: "ChineseFlag",
          value: "/",
        },
        {
          name: "JapaneseFlag",
          value: "/",
        },
        {
          name: "TurkeyFlag",
          value: "/",
        },
        // {
        //   name: "BangladeshFlag",
        //   value: "/",
        // },
      ],
    },
  ],
};
