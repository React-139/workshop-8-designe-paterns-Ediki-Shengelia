import React, { Children } from "react";
import { createPortal } from "react-dom";
import './style.css'
const Modal = ({children}) => {
  return createPortal(
    <div className="Modal">{children}</div>,
    document.getElementById("Modal_id")
  );
};

export default Modal;
