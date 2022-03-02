import React, { useState, useRef, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import ReachAlert from "@reach/alert";
import { useTimeout, createAnimationConfig } from "./utils";

export const Message = ({
  id,
  message,
  position,
  onRequestRemove,
  requestClose = false,
  duration = 30000,
}) => {
  const container = useRef(null);
  const [timeout, setTimeout] = useState(duration);
  const [localShow, setLocalShow] = useState(true);

  const onMouseEnter = () => setTimeout(null);

  const onMouseLeave = () => setTimeout(duration);

  const onRest = () => {
    if (!localShow) {
      onRequestRemove();
    }
  };

  function onClose() {
    setLocalShow(false);
  }

  useEffect(() => {
    if (requestClose) {
      setLocalShow(false);
    }
  }, [requestClose]);

  const renderMessage = () => {
    return message({
      id,
      onClose,
    });
  };

  useTimeout(onClose, timeout);

  const animation = createAnimationConfig(position, container, onRest);

  const transition = useTransition(localShow, animation);

  return transition(
    (props, item) =>
      item && (
        <animated.div
          className="Toaster__message"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{
            opacity: props.opacity,
            height: props.height,
            margin: "10px",
          }}
        >
          <animated.div
            style={{
              transform: props.transform,
              pointerEvents: "auto",
            }}
            ref={container}
            className="Toaster__message-wrapper"
          >
            <ReachAlert>{renderMessage()}</ReachAlert>
          </animated.div>
        </animated.div>
      )
  );
};
