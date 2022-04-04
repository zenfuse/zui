import React, { useMemo, useState } from "react";
import SmartButton from "../../../smart-button";
import { getLinkTo } from "../../../../functions/utils/vanilla-utils";
import * as R from "ramda";
import ConfettiButton from "../confetti-button";
import MultiIconsButton from "../multi-icons-button";

const baseUrl = process.env.NEXT_PUBLIC_CLIENT_BASE_URL || "https://zenfuse.io";

const Button = (props) => {
  const variant = R.prop("variant", props);

  const passClasses = useMemo(() => {
    let className = "";
    if (R.indexOf(variant, addBaseClassesVariants) > -1) {
      className += baseClasses;
    }
    switch (variant) {
      case "circle-outline":
        className += circleOutlineBaseClasses;
        break;
      case "transparent":
        className += transparentBaseClasses;
        break;
      case "transparent-outline":
        className += transparentOutlineBaseClasses;
        break;
      case "primary":
        className += primaryBaseClasses;
        break;
      case "gray-outline":
        className += grayOutlineBaseClasses;
        break;
      case "primary-outline":
        className += primaryOutlineBaseClasses;
        break;
      case "gray-solid":
        className += graySolidBaseClasses;
        break;
      case "blur-primary":
        className += blurPrimaryBaseClasses;
        break;
      case "text":
        className += textBaseClasses;
        break;
      case "confetti":
        className += confettiBaseClasses;
        break;
      case "action":
        className += actionBaseClasses;
        break;
    }
    className += props.className;
    return className;
  }, [props.className]);

  const customButton = variant === "confetti" || variant === "multi-icons";

  return (
    <>
      {!customButton && (
        <SmartButton
          {...props}
          variant={props.variant}
          className={passClasses}
          href={getLinkTo({
            baseUrl,
            linkTo: props.link,
          })}
        >
          {props.children}
        </SmartButton>
      )}
      {variant === "confetti" && (
        <ConfettiButton
          title={R.prop("title", props)}
          link={R.prop("link", props)}
          className={passClasses}
        />
      )}
      {variant === "multi-icons" && (
        <MultiIconsButton
          linkProps={R.prop("linkProps", props)}
          className={passClasses}
        />
      )}
    </>
  );
};

export default Button;

const addBaseClassesVariants = [
  "circle-outline",
  "transparent",
  "transparent-outline",
  "primary",
  "primary-outline",
  "gray-outline",
  "gray-solid",
  "blur-primary",
  "text",
  "action",
];

const baseClasses = `
  @pn relative 
  @dy flex 
  @ftf font-family-rubik-medium
  @oe focus:outline-none
  @cr cursor-pointer
  @tndn duration-200 
  @tta text-center 
  @fts text-18px
  @leh leading-24px
  @pg px-8 py-3 
  @jyc justify-center
  @ani items-center 
  @bdo hover:opacity-70
  @wh w-fit
  @we whitespace-nowrap 
`;

const primaryBaseClasses = `
  @bdc bg-blue-650
  @fxd flex-row 
  @brr rounded-8px 
`;

const primaryOutlineBaseClasses = `
  @bdc bg-white
  @brw border
  @brc border-blue-650
  @fxd flex-row-reverse 
  @brr rounded-full
  @ttc text-blue-650 
`;

const transparentBaseClasses = `
  @fxd flex-row-reverse
  @ttc text-blue-650
  @pg px-5 py-3 
`;

const transparentOutlineBaseClasses = `
  @fxd flex-row
  @ttc text-blue-650
  @brr rounded-8px 
  @brw border
  @brc border-blue-650
`;

const circleOutlineBaseClasses = `
 @tndn duration-200
 @brr rounded-full
 @brw border 
 @brc border-true-gray-150
`;

const grayOutlineBaseClasses = `
 @bdc bg-white
 border border-true-gray-300
 @fxd flex-row 
 @brr rounded-8px
 @ttc text-true-gray-850 
`;

const graySolidBaseClasses = `
 @brr rounded-full
 @bdc bg-true-gray-100
 @ttc text-blue-650
`;

const blurPrimaryBaseClasses = `
  @brr rounded-full
  @ttc text-white
  @pg py-5 px-9
  @bdo sm:hover:scale-105
  blur-button
`;

const textBaseClasses = `
  @ttc text-true-gray-350
  @fxd flex-row-reverse 
`;

const confettiBaseClasses = `
  @ftf font-family-schoolbell
  @ttc text-black-850
  @fts text-22px
  @leh leading-32px
  @ttc hover:text-blue-650
  @tn transition
  @tndn duration-200
  cursor-pointer
  @dy flex 
  @jyc justify-center
  @ani items-center
  @pn relative
  @wh w-full
`;

const actionBaseClasses = `
  action-button
  @brw border
  @brr rounded-10px
  @ttc text-white
  @bdo
`;
