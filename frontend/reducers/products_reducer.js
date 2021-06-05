import {
    RECEIVE_PRODUCT,
    RECEIVE_PRODUCTS
} from '../actions/product_actions';

const productsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            newState[action.product.id] = action.product;
        default:
            return state;
    }
};

export default productsReducer;