import React, { useEffect, useState, useMemo } from "react";
import AllIcons from "../../../ui/all-icons";
import useStyleRewriter from "../../../../functions/hooks/use-style-rewriter";
import { Transition } from "transition-component";

const ModalComponent = ({
  show = false, //required
  setShow = () => {}, //required
  RenderCard = () => <></>, //required
  CloseButton = DefaultCloseButton,
  popupWindowClasses = "",
  closeButtonClasses = "",
  layoutClasses = "",
  containerClasses = "",
  removeFromDom = false,
  transitionDuration: duration = 300,
  renderCardProps = {},
}) => {
  const [showLayout, setShowLayout] = useState(show);
  const srLayoutClasses = useStyleRewriter(baseLayoutClasses, layoutClasses);
  const srPopupWindowClasses = useStyleRewriter(
    "@pre pointer-events-auto @tnp transition z-40 @pn relative",
    popupWindowClasses
  );
  const srContainerClasses = useStyleRewriter(
    baseContainerClasses,
    containerClasses
  );
  const changePopup = (bool) => {
    if (bool) {
      document.body.style.overflow = "hidden";
      setShowLayout(true);
    } else {
      document.body.style.overflow = "auto";
      setTimeout(() => {
        setShowLayout(false);
      }, duration - 50);
    }
  };

  useEffect(() => {
    changePopup(show);
  }, [show]);

  // close popup on 'escape' key
  useEffect(() => {
    const changePopupListener = (e) => {
      if (e.code === "Escape") {
        setShow(false);
        changePopup(false);
      }
    };
    window.addEventListener("keydown", changePopupListener);
    return () => {
      window.removeEventListener("keydown", changePopupListener);
    };
  }, []);

  const TransitionElement = removeFromDom ? TransitionComponent : PlainDiv;

  return (
    <>
      <div
        className={` ${
          showLayout ? "z-50 flex" : "-z-1"
        } ${srContainerClasses} `}
      >
        <TransitionElement
          baseClasses={`fixed inset-0 pointer-events-auto duration-${duration} transition z-10`}
          show={show}
          transitionProps={layoutTransitionProps}
        >
          <div className="transition fixed inset-0">
            <div onClick={() => setShow(false)} className={srLayoutClasses} />
          </div>
        </TransitionElement>
        <TransitionElement
          baseClasses={`pointer-events-auto transition duration-${duration} z-40 relative`}
          show={show}
          id={"modal"}
          changePopup={setShow}
          transitionProps={contentTransitionProps}
        >
          <div className={srPopupWindowClasses}>
            <CloseButton
              setShow={(bool) => setShow(bool)}
              closeButtonClasses={closeButtonClasses}
            />
            <RenderCard {...renderCardProps} show={show} setShow={setShow} />
          </div>
        </TransitionElement>
      </div>
    </>
  );
};

export default ModalComponent;

const baseCloseButtonClasses = `@wh w-5 @ht h-5 @pn absolute @oe outline-none focus:outline-none @zi z-40`;
const DefaultCloseButton = ({ setShow, closeButtonClasses }) => {
  const srClasses = useStyleRewriter(
    baseCloseButtonClasses,
    closeButtonClasses
  );

  return (
    <button
      onClick={() => setShow(false)}
      type="button"
      className={srClasses}
      style={{ right: "15px", top: "15px" }}
    >
      <AllIcons name="Close" className="w-full text-gray-500" />
    </button>
  );
};

const baseLayoutClasses =
  "@pn fixed @it inset-0 @pre pointer-events-auto @zi z-10 @bdc bg-gray-500 @bdo opacity-50";

const baseContainerClasses =
  "@pre pointer-events-none @dy  @pn fixed @ow overflow-hidden @it bottom-0 inset-0 @pg px-5 py-10 @ani items-center @jyc justify-center";
const layoutTransitionProps = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};

const contentTransitionProps = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  enterTo: "opacity-100 translate-y-0 sm:scale-100",
  leave: "ease-in duration-300",
  leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
  leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
};

const TransitionComponent = ({ children, show, transitionProps }) => (
  <Transition show={show} {...transitionProps}>
    {children}
  </Transition>
);

const PlainDiv = ({
  children,
  show,
  transitionProps,
  baseClasses,
  changePopup = () => {},
  id,
}) => (
  <div
    id={id}
    onClick={(e) => (e.target.id === id ? changePopup(false) : null)}
    className={`${baseClasses} ${
      show ? transitionProps.enterTo : transitionProps.leaveTo
    }`}
  >
    {children}
  </div>
);
