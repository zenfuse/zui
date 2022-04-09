import React, { useState } from "react";
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
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{ backdropFilter: isMobile ? "none" : "blur(20px)" }}
      className={`w-auto md:w-360px z-50 shadow-lg rounded-10px px-5 py-3 flex flex-col gap-1 border border-true-gray-150 ${
        isMobile && `bg-white dark:bg-true-gray-750`
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          {iconName ? (
            <AllIcons name={iconName} className={iconClassName} />
          ) : null}
          {title ? (
            <p
              className={`font-family-inter-semi-bold text-12px leading-18px ${
                titleClasses || "text-black dark:text-white"
              }`}
            >
              {title}
            </p>
          ) : null}
        </div>
        {link ? (
          <Link href={link} passHref>
            <a className="font-family-inter-medium text-10px leading-14px text-blue-primary dark:text-blue-650 ml-auto hover:opacity-70 duration-200">
              {linkTitle}
            </a>
          </Link>
        ) : null}
        <SmartButton
          variant="text"
          onClick={onClose}
          className={`duration-200 ${
            isMobile || (hover && !isMobile) ? `opacity-100` : `opacity-0`
          }`}
        >
          <AllIcons
            name="Plus"
            className={`w-4 rotate-45 text-true-gray-450`}
          />
        </SmartButton>
      </div>
      {message ? (
        <p className="font-family-inter-medium text-left text-10px leading-14px text-true-gray-450">
          {message}
        </p>
      ) : null}
    </div>
  );
};

export default SideNotificationLayout;
