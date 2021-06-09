import * as CartApiUtil from '../util/cart_api_util';
export const RECEIVE_CART = 'RECEIVE_CART';

const receiveCart = cart => {
    return {
        type: RECEIVE_CART,
        cart
    }
};

export const fetchCart = () => dispatch => {
    return CartApiUtil.fetchCart()
        .then(cart => dispatch(receiveCart(cart))
    );
};