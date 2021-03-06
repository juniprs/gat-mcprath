import { RECEIVE_CART } from "../actions/cart_actions";
import { RECEIVE_CART_ITEM, REMOVE_CART_ITEM } from "../actions/cart_item_actions";

const cartReducer = (state = {}, action) => {
  console.log('action:', action)
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CART:
      return action.cart;
    case RECEIVE_CART_ITEM:
      return Object.assign(newState, action.cartItem);
    case REMOVE_CART_ITEM:
      delete newState[action.cartItemId]
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
