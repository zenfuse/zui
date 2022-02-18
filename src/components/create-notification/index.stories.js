import React from "react";
import SmartButton from "../smart-button";
import createNotification from '../create-notification'

export default {
  component: createNotification,
  title: "Notification/CreateNotification",
  decorators: [
    (story) => <div className="w-64 mx-auto mt-40">{story()}</div>,
  ],
};

const Template = (args) => <SmartButton onClick={() => createNotification({message: 'Lorem ipsum Lorem ipsum Lorem ipsum'})} variant={'primary'}>Click me!</SmartButton>;

export const Default = Template.bind({});

Default.args = {
  message: ''
};
