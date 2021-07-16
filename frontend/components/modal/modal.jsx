import React from "react";
import { IoCloseOutline } from "react-icons/io";

export default (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <div className="modal-header">
          {/* <IoCloseOutline /> */}
          <h1 className="modal-title">YOUR BAG</h1>
        </div>
        <div className="modal-body">Your cart is empty!</div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="modal-close">Close</button>
        </div>
      </div>
    </div>
  );
};
