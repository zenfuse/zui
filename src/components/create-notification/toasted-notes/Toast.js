import * as ReactDOM from "react-dom";
import * as React from "react";
import ToastManager from "./ToastManager";

const isBrowser =
  typeof window !== "undefined" && typeof window.document !== "undefined";
const PORTAL_ID = "react-toast";

class Toaster {
  createNotification;
  removeAll;
  closeToast;

  constructor() {
    if (!isBrowser) {
      return;
    }

    let portalElement;
    const existingPortalElement = document.getElementById(PORTAL_ID);

    if (existingPortalElement) {
      portalElement = existingPortalElement;
    } else {
      const el = document.createElement("div");
      el.id = PORTAL_ID;
      el.className = "Toaster";
      if (document.body != null) {
        document.body.appendChild(el);
      }
      portalElement = el;
    }

    ReactDOM.render(<ToastManager notify={this.bindNotify} />, portalElement);
  }

  closeAll = () => {
    if (this.removeAll) {
      this.removeAll();
    }
  };

  bindNotify = (fn, removeAll, closeToast) => {
    this.createNotification = fn;
    this.removeAll = removeAll;
    this.closeToast = closeToast;
  };

  notify = (message, options = {}) => {
    if (this.createNotification) {
      return this.createNotification(message, options);
    }
  };

  close = (id, position) => {
    if (this.closeToast) {
      this.closeToast(id, position);
    }
  };
}

export default Toaster;
