import * as CartItemApiUtil from '../util/cart_item_api_util';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

const receiveCartItem = cartItem => {
    return {
        type: RECEIVE_CART_ITEM,
        cartItem
    }
};

const removeCartItem = productId => {
    return {
        type: REMOVE_CART_ITEM,
        productId
    }
};

export const createCartItem = cartItem => dispatch => {
    return CartItemApiUtil.postCartItem(cartItem)
        .then(cartItem => dispatch(receiveCartItem(cartItem))
    )
};

export const updateCartItem = cartItem => dispatch => {
    return CartItemApiUtil.updateCartItem(cartItem)
        .then(cartItem => dispatch(updateCartItem(cartItem))
    )
};

export const deleteCartItem = cartItemId => dispatch => {
    return CartItemApiUtil.deleteCartItem(cartItemId)
        .then(() => dispatch(removeCartItem(cartItemId))
    )
};