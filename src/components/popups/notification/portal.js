import React from "react";
import { createPortal } from "react-dom";

import SideNotificationComponent from "./SideNotificationComponent";

const SideNotificationPortal = ({ targetId = "notification", ...props }) => {
  return createPortal(
    <SideNotificationComponent {...props} />,
    document.getElementById(targetId)
  );
};

export default SideNotificationPortal;
