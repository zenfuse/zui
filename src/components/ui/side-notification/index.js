import React from "react";
import AllIcons from "../all-icons"

const SideNotificationLayout = ({ title, onClose }) => (
  <div className="w-auto z-50 mr-2 mb-2">
    <div className="w-auto shadow-trigger dark:shadow-dark-shadow-200 border border-gray-light dark:border-true-gray-750 rounded-8px flex overflow-hidden bg-white dark:bg-true-gray-800 relative">
      <div className="w-10/12 px-3 py-4">
        <div className="text-12px font-family-inter text-gray-blue dark:text-white @wdb break-words">
          {title}
        </div>
      </div>
      <button onClick={onClose} className="absolute top-2 right-2">
        <AllIcons name="Close" className="w-4 text-gray-dark dark:text-white" />
      </button>
    </div>
  </div>
);

export default SideNotificationLayout;
