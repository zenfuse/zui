import React from "react";
import { isMobile } from "react-device-detect";
import AllIcons from "../all-icons";
import Link from "next/link";
import SmartButton from "../../smart-button";

const SideNotificationLayout = ({
  title,
  titleClasses = "",
  message,
  iconName,
  iconClassName = "w-5 h-5",
  link,
  linkTitle = "See more",
  onClose,
}) => {
  return (
    <div className="w-auto md:w-360px z-50 shadow-lg rounded-10px group px-5 py-3 flex flex-col gap-1 border border-true-gray-150 bg-white dark:bg-true-gray-750">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          {iconName && <AllIcons name={iconName} className={iconClassName} />}
          {title && (
            <p
              className={`font-family-inter-semi-bold text-12px leading-18px ${
                titleClasses || "text-black dark:text-white"
              }`}
            >
              {title}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          {link && (
            <Link href={link} passHref>
              <a className="font-family-inter-medium text-10px leading-14px text-blue-primary dark:text-blue-650 ml-auto hover:opacity-70 duration-200">
                {linkTitle}
              </a>
            </Link>
          )}
          <SmartButton
            variant="text"
            onClick={onClose}
            className={`duration-200 ${
              isMobile ? `opacity-100` : `opacity-0 group-hover:opacity-100`
            }`}
          >
            <AllIcons
              name="Plus"
              className="w-4 rotate-45 text-true-gray-450"
            />
          </SmartButton>
        </div>
      </div>
      {message && (
        <p className="font-family-inter-medium text-left text-10px leading-14px text-true-gray-450">
          {message}
        </p>
      )}
    </div>
  );
};

export default SideNotificationLayout;
