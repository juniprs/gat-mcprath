import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { connect } from "react-redux";
import { fetchCart } from "../../actions/cart_actions";
import {
  updateCartItem,
  deleteCartItem,
} from "../../actions/cart_item_actions";
import { fetchProducts } from "../../actions/product_actions";
import CartContainer from "../cart/cart_container";

const Modal = (props) => {
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
<<<<<<< HEAD
      {/* <div className="checkout-cart">
        Thank you for shopping at Gat McPrath ♥
      </div> */}

=======
>>>>>>> parent of 6a4985d (Account for modal change on checkout)
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1 className="modal-title">YOUR BAG</h1>
          <a onClick={props.onClose} className="modal-close">
            <IoCloseOutline size={25} />
          </a>
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className="modal-body">
          {props.cart.length ? (
            <CartContainer />
          ) : (
            <div className="empty-cart">Your bag is currently empty.</div>
          )}
=======
        {/* <div className="modal-body">{props.children}</div>
         */}
        {/* <div className="modal-body">Your bag is currently empty.</div>
         */}
>>>>>>> 4a49978fff16368e1e8797b240d49a2391a2b94e
        <div className="modal-body">
          {props.cart.length ? <CartContainer /> : <div className="empty-cart">Your bag is currently empty.</div>}
>>>>>>> parent of 6a4985d (Account for modal change on checkout)
        </div>
      </div>
    </div>
  );
};

const mSTP = (state) => {
  return {
    cart: Object.values(state.entities.cart),
    products: state.entities.products,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart()),
    fetchProducts: () => dispatch(fetchProducts()),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
  };
};

export default connect(mSTP, mDTP)(Modal);
