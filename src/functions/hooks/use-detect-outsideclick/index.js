import { useState, useEffect } from "react";
import * as R from "ramda";

const useDetectOutsideClick = (el, initialState, trigger) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (!isActive) {
        if (
          R.prop("current", trigger) &&
          trigger.current.contains(e.target)
        ) {
          setIsActive(true);
        }
      }
      if (isActive) {
        if (el.current && !el.current.contains(e.target)) {
          setIsActive(false);
        }
      }
    };

    window.addEventListener("click", pageClickEvent);

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};

export default useDetectOutsideClick;

// useEffect(() => {
//   const pageClickEvent = (e) => {
//     if (!isActive) {
//       if (trigger.current.contains(e.toElement)) {
//         setIsActive(true);
//       }
//     }
//     if (isActive) {
//       if (el.current && !el.current.contains(e.target)) {
//         setIsActive(false);
//       }
//     }
//   };

// const [hasBeenOpened, setHasBeenOpened] = useState(false);
// useEffect(() => {
//   const pageClickEvent = (e) => {
//     if (isActive) {
//       setHasBeenOpened(true);
//     }
//
//     if (hasBeenOpened && isActive) {
//       if (el.current && !el.current.contains(e.target)) {
//         setIsActive(false);
//         setHasBeenOpened(false);
//       }
//     }
//   };
