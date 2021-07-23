import { RECEIVE_CART } from "../actions/cart_actions";
import { RECEIVE_CART_ITEM } from "../actions/cart_item_actions";

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CART:
      return action.cart;
    case RECEIVE_CART_ITEM:
      newState[Object.keys(action.cartItem)[0]] = Object.values(
        action.cartItem
      )[0];
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
