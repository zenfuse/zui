import React, { useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import useDetectOutsideClick from "../../functions/hooks/use-detect-outsideclick";
import useDetectMouseover from "../../functions/hooks/use-detect-mouseover";
import useStyleRewriter from "../../functions/hooks/use-style-rewriter";
import { Transition } from "transition-component";
import DropdownContainer from "../../components/ui/dropdown-container";
import Tooltip from "../../components/ui/tooltip";
import * as R from "ramda";

const SmartButton = ({
  disabled,
  className,
  children,
  variant,
  tooltipPosition,
  href = "",
  dropdownItems,
  dropdownContainerClasses = "",
  dropdownProps,
  tooltipItems,
  tooltipContainerClasses = "",
  onClick,
  linkProps = [],
}) => {
  const dropdownRef = useRef(null);
  const SmartButtonRef = useRef(null);

  const DropdownItems = useMemo(() => dropdownItems, [dropdownItems]);
  const TooltipItems = useMemo(() => tooltipItems, [tooltipItems]);

  const [isDropdownOpen, setIsDropdownOpen] = useDetectOutsideClick(
    dropdownRef,
    false,
    SmartButtonRef
  );

  const [isMouseOver] = useDetectMouseover(SmartButtonRef, false);

  const variantClasses = useVariant(className, variant);

  const srClasses = useStyleRewriter(
    variantClasses,
    `${disabled ? disabledClasses : ""} ${className} `
  );

  // const onClickFunc = useCallback(
  //   (e) => {
  //     if (onClick) {
  //       return onClick(e, { dropdown: { isDropdownOpen, setIsDropdownOpen } });
  //     }
  //   },
  //   [isDropdownOpen]
  // );

  const Element = useMemo(() => {
    if (href) {
      return LinkSmartButton;
    } else {
      return DivSmartButton;
    }
  }, [SmartButtonRef, srClasses, children]);

  const elementProps = useMemo(() => {
    if (href) {
      return { href, passHref: true, className: srClasses, linkProps };
    } else {
      return { className: srClasses };
    }
  }, [baseClasses, href, srClasses, disabled, linkProps]);

  return (
    <>
      <Element
        SmartButtonRef={SmartButtonRef}
        onClick={onClick}
        {...elementProps}
      >
        {typeof children === "function"
          ? children({ isMouseOver, isDropdownOpen })
          : children}

        {DropdownItems && (
          <Transition show={isDropdownOpen} {...contentTransitionProps}>
            <DropdownContainer
              className={dropdownContainerClasses}
              dropdownRef={dropdownRef}
            >
              <DropdownItems
                {...dropdownProps}
                setIsDropdownOpen={setIsDropdownOpen}
              />
            </DropdownContainer>
          </Transition>
        )}
        {TooltipItems && (
          <Transition show={isMouseOver} {...tooltipTransitionProps}>
            <Tooltip
              tooltipPosition={tooltipPosition}
              className={tooltipContainerClasses}
              visible={isMouseOver}
            >
              <TooltipItems />
            </Tooltip>
          </Transition>
        )}
      </Element>
    </>
  );
};
export default SmartButton;

const baseClasses =
  "@pn relative @ftf font-family-rubik @oe focus:outline-none @cr cursor-pointer @tndn duration-200 @tta text-center";

const disabledClasses =
  "@pre pointer-events-none @oy opacity-60 @bdc bg-true-gray-100 dark:bg-true-gray-700 @ttc text-true-gray-450";

const useVariant = (defaultClasses, variant) => {
  return useMemo(() => {
    switch (variant) {
      case "primary":
        return `${baseClasses} 
          @bdc bg-blue-primary dark:bg-blue-600
          @bdo hover:bg-opacity-60 dark:hover:bg-opacity-80
          @dy flex 
          @fxd flex-row 
          @ani items-center 
          @pg px-8 py-3 
          @brr rounded-8px 
          @fts text-15px 
          @ttc text-white`;
      case "white":
        return `${baseClasses} 
          @tnp transition 
          @tntf ease-in-out 
          @bdc bg-white hover:bg-gray-blue 
          @dy flex 
          @fxd flex-row 
          @ani items-center 
          @pg px-8 py-3 
          @brr rounded-8px 
          @fts text-15px 
          @ttc text-blue-base hover:text-white`;
      case "danger":
        return `${baseClasses} 
          @bdc bg-red-base 
          @bdo hover:bg-opacity-60 
          @dy flex 
          @fxd flex-row 
          @ani items-center 
          @pg px-8 py-3 
          @brr rounded-8px 
          @fts text-15px 
          @ttc text-white`;
      case "light":
        return `${baseClasses} 
          @bdc bg-white hover:bg-gray-accent 
          @ttc text-black hover:text-blue-primary 
          @pg px-4 py-2 
          @brr rounded-16px 
          @tta text-left`;
      case "light-blue":
        return `${baseClasses} 
          @bdc bg-blue-light 
          @bdc hover:bg-blue-primary 
          @ttc text-blue-primary hover:text-white 
          @pg px-8 py-3 
          @brr rounded-16px 
          @tta text-left`;
      case "text":
        return `${baseClasses}`;
      case "circleLight":
        return `${baseClasses} 
          @brc border-gray-light hover:border-blue-primary 
          @brw border-px 
          @dy flex 
          @jyi justify-center
          @ani items-center
          @ht h-8 
          @ow overflow-visible
          @pn relative 
          @bdc hover:bg-blue-primary 
          @ttc hover:text-white 
          @brr rounded-full 
          @wh w-8
          @zi z-45`;
      case "circlePrimary":
        return `${baseClasses} 
          @bdc bg-blue-primary 
          @brc border-blue-primary 
          @brw border-px 
          @dy flex 
          @ani items-center
          @jyi justify-center
          @ht h-8 
          @pn relative 
          @brr rounded-full 
          @wh w-8 
          @ttc text-white`;
      case "transparentOutline":
        return `${baseClasses}
          @dy flex flex-row
          @ani items-center
          @ttc text-blue-650
          @bdo hover:opacity-70
          @jyc justify-center
          @brr rounded-8px 
          @brw border
          @brc border-blue-650
          @pg px-8 py-3`;
      default:
        return defaultClasses;
    }
  }, [defaultClasses, variant]);
};
const DivSmartButton = ({ children, SmartButtonRef, ...props }) => {
  return (
    <div ref={SmartButtonRef} {...props}>
      {children}
    </div>
  );
};
const LinkSmartButton = ({ children, className, linkProps, ...props }) => {
  let linkAttributes = [];
  if (!R.isEmpty(linkProps) && linkProps) {
    linkAttributes = linkProps.map(({ name, value }) => [name, value]);
    linkAttributes = Object.fromEntries(linkAttributes);
  }
  return (
    <Link {...props}>
      <a {...linkAttributes} className={className}>
        {children}
      </a>
    </Link>
  );
};

const contentTransitionProps = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};

const tooltipTransitionProps = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 scale-50",
  enterTo: "opacity-100 scale-100",
  leave: "ease-in duration-300",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-50",
};
