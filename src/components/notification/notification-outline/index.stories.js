import React, { useState } from "react";
import NotificationOutline from ".";

export default {
  component: NotificationOutline,
  title: "Notifications/NotificationOutline",
  decorators: [
    (story) => <div className="w-full flex flex-col">{story()}</div>,
  ],
};
const Template = (args) => {
  return (
    <NotificationOutline>
      <p className="text-current font-family-inter-regular">
        Notification content
      </p>
    </NotificationOutline>
  );
};

export const Default = Template.bind({});

Default.args = {};
