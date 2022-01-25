import React from "react";
import toaster from "./toasted-notes";
import SideNotificationLayout from "../ui/side-notification";

const createNotification = ({ message }) => {
  return toaster.notify(renderLayout({ message }), {
    duration: 6000,
    position: "bottom-right",
  });
};


export default createNotification;

export const renderLayout = ({ message }) => ({ onClose }) => (
  <SideNotificationLayout title={message} onClose={onClose} />
);
