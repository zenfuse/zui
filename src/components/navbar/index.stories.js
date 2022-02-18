import React from "react";
import Navbar from "./index";

export default {
  component: Navbar,
  title: "Components/Navbar",
  decorators: [
    (story) => (
      <div
        className="bg-white w-full relative overflow-hidden"
        style={{ height: "4000px" }}
      >
        {story()}
      </div>
    ),
  ],
};

const Template = (args) => <Navbar />;

export const Default = Template.bind({});

Default.args = {};
