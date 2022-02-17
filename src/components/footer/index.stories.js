import React from "react";
import Footer from "./index";
import { withNextRouter } from "storybook-addon-next-router";
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

export default {
  component: Footer,
  title: "Components/Footer",
  decorators: [withNextRouter, (story) => <div className="">{story()}</div>],
};

const Template = (args) => (
  <div className="w-full">
    <Footer {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
