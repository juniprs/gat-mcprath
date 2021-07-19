import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default (props) => {
  // if (!props.show) {
  //   return null;
  // }

  const closeOnEscape = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscape);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div
      className={`modal-wrapper ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1 className="modal-title">YOUR BAG</h1>
        </div>
        {/* <div className="modal-body">{props.children}</div>
         */}
        <div className="modal-body">Your bag is currently empty.</div>
        <a onClick={props.onClose} className="modal-close">
          <IoCloseOutline size={20} />
        </a>
      </div>
    </div>
  );
};
