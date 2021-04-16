import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div class="overlay">
      <div class="overlayContent">{props.children}</div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
