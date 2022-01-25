import React, { useRef } from "react";
import { animated, useSpring } from "react-spring";
import useDomMeasure from "../../functions/hooks/use-dom-measure";

const DropdownAnimate = ({
  show = false,
  children,
  triggerArr = [],
  heightScaling = 1,
  animationSpeed = 300,
}) => {
  const childrenRef = useRef(null);
  const [, height] = useDomMeasure(childrenRef, triggerArr);

  const props = useSpring({
    height: show && height ? height * heightScaling : 0,
    overflow: show ? "auto" : "hidden",
    zIndex: show ? 10 : 0,
    opacity: show ? 1 : 0,
    config: {
      duration: animationSpeed,
    },
  });

  return (
    <>
      <div className="w-full">
        <animated.div
          style={props}
          className={`w-full flex flex-col items-center justify-center ease-out`}
        >
          <div className={`w-full transition`} ref={childrenRef}>
            {children}
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default DropdownAnimate;