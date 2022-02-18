import React from "react";
import Footer from "./index";


export default {
  component: Footer,
  title: "Components/Footer",
  decorators: [(story) => <div className="">{story()}</div>],
};

const Template = (args) => (
  <div className="w-full">
    <Footer {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
