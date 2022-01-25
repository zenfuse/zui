import React from "react";

import CardBoxHeading from "./index";

export default {
  component: CardBoxHeading,
  title: "UI/Containers/CardBox/CardBoxHeading",
  parameters: {
    docs: {
      description: {
        component: "Компонент заголовка для карточки",
      },
    },
  },
};

const Template = (args) => (
  <div className="relative w-full h-20">
    <CardBoxHeading {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: "CardBox Heading",
  subtitle: "Компонент заголовка для карточки",
};
