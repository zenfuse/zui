import React from "react";

import CardBox from "./index";
import CardBoxHeading from "./card-box-heading";

export default {
  component: CardBox,
  title: "UI/Containers/CardBox",
  parameters: {
    docs: {
      description: {
        component:
          "Компонент карточки для контента, используется для всплывающих окон",
      },
    },
  },
};

const Template = (args) => (
  <div className="relative w-full h-20">
    <CardBox {...args}></CardBox>
  </div>
);

export const Default = Template.bind({});

const ChildData = () => (
  <div className="flex flex-col lg:flex-row">
    <div className="w-full lg:w-1/2">
      <CardBoxHeading
        title={`Your statistics`}
        subtitle={`The more friends you invite, the faster you’ll get an access to Zenfuse MVP.`}
      />
    </div>
  </div>
);

Default.args = {
  children: <ChildData />,
  className: "",
};
