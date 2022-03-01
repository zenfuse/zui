import React from "react";
import { withNextRouter } from "storybook-addon-next-router";
import SmartButton from "../smart-button";
import createNotification from "../create-notification";

export default {
  component: createNotification,
  title: "Notification/CreateNotification",
  decorators: [
    withNextRouter,
    (story) => <div className="w-64 mx-auto mt-40">{story()}</div>,
  ],
};

const Template = (args) => (
  <SmartButton onClick={() => createNotification(args)} variant="primary">
    Click me!
  </SmartButton>
);

export const Default = Template.bind({});

Default.args = {
  title: "Notification title",
  titleClasses: "text-green-450",
  message: "Hello! I am message",
  link: "/",
  iconName: "NotificationSuccess",
};
