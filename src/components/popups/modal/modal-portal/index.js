import React from "react";
import { createPortal } from "react-dom";
import ModalComponent from "../modal-component";

const ModalPortal = ({ targetId = "modal", ...props }) => {
  return createPortal(
    <ModalComponent {...props} />,
    document.querySelector(`#${targetId}`)
  );
};

export default ModalPortal;