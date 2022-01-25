import React from "react";
import dynamic from "next/dynamic";

const SideNotificationPortal = dynamic(() => import("./portal.js"), {
  ssr: false,
});

const SideNotification = ({ ...props }) => {
  return <SideNotificationPortal {...props} />;
};
export default SideNotification;
