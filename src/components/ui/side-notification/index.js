import React from "react";
import AllIcons from "../all-icons";
import Link from "next/link";

const SideNotificationLayout = ({
  title,
  titleClasses = "",
  message,
  iconName,
  iconClassName = "w-5 h-5",
  link,
  linkTitle = "See more",
  onClose,
}) => (
  <div
    style={{ backdropFilter: "blur(20px)" }}
    className="w-auto md:w-360px z-50 m-1 shadow-lg rounded-10px px-4 py-2 flex flex-col gap-1 border bg-white bg-opacity-70 dark:bg-true-gray-750"
    onClick={onClose}
  >
    <div className="flex flex-row items-center gap-3">
      {iconName ? <AllIcons name={iconName} className={iconClassName} /> : null}
      {title ? (
        <p
          className={`font-family-inter-semi-bold text-12px leading-18px ${
            titleClasses || "text-black dark:text-white"
          }`}
        >
          {title}
        </p>
      ) : null}
      {link ? (
        <Link href={link} passHref>
          <a className="font-family-inter-medium text-10px leading-14px text-blue-primary dark:text-blue-650 ml-auto hover:opacity-70 duration-200">
            {linkTitle}
          </a>
        </Link>
      ) : null}
    </div>
    {message ? (
      <p className="font-family-inter-medium text-10px leading-14px text-true-gray-450">
        {message}
      </p>
    ) : null}
  </div>
);

export default SideNotificationLayout;
