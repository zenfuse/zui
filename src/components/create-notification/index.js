import React from "react";
import toaster from "./toasted-notes";
import SideNotificationLayout from "../ui/side-notification";
import { isMobile } from "react-device-detect";

const createNotification = (props) => {
  return toaster.notify(renderLayout(props), {
    duration: 6000,
    position: isMobile ? "top" : "bottom-right",
  });
};

export default createNotification;

export const renderLayout = (props) => ({ onClose }) => (
  <SideNotificationLayout {...props} onClose={onClose} />
);
