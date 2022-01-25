import React, { useEffect, useMemo, useState } from "react";
import { getActionKey } from "../../../functions/utils/redux/action-utils";
// import PropTypes from "prop-types";
// import requiredIf from "react-required-if";
import ModalArray from "../modal/modal-array";
import useStyleRewriter from "../../../functions/hooks/use-style-rewriter";
import dynamic from "next/dynamic";

const ModalPortal = dynamic(() => import("../modal/modal-portal"), {
  ssr: false,
});

const Modal = ({ children, showEffect = () => {}, ...props }) => {
  const [show, setShow] = useState(false);
  const srChildContainerClasses = useStyleRewriter(
    "@cr cursor-pointer @wh w-full @ht h-full",
    props.childContainerClasses
  );
  const modalComponentId = useMemo(() => {
    const name = props.RenderCard.name;

    if (!name || name === "anonymous") {
      return `component${getActionKey()}`;
    }
    return name;
  }, []);

  useEffect(() => {
    showEffect({ show, setShow });
  }, [children ? show : props.show, props]);

  return (
    <>
      <ModalPortal
        modalComponentId={
          props.modalComponentId ? props.modalComponentId : modalComponentId
        }
        setShow={children ? setShow : props.setShow}
        show={children ? show : props.show}
        {...props}
      />
      {children ? (
        <div className={srChildContainerClasses} onClick={() => setShow(true)}>
          {children}
        </div>
      ) : null}
    </>
  );
};

export { ModalArray };
export default Modal;

// Modal.propTypes = {
//   show: requiredIf(PropTypes.bool, (props) => !props.children),
//   setShow: requiredIf(PropTypes.func, (props) => !props.children),
//   RenderCard: PropTypes.func,
//   children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
//   showEffect: PropTypes.func,
//   CloseButton: PropTypes.elementType,
//   popupWindowClasses: PropTypes.string,
//   closeButtonClasses: PropTypes.string,
//   layoutClasses: PropTypes.string,
//   containerClasses: PropTypes.string,
//   removeFromDom: PropTypes.bool,
//   transitionDuration: PropTypes.number,
//   modalComponentId: PropTypes.string,
//   renderCardProps: PropTypes.object,
//   getRenderCardProps: PropTypes.func,
// };
