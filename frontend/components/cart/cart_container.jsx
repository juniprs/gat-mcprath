import { connect } from 'react-redux';
import { fetchCart } from '../../actions/cart_actions';
import { updateCartItem, deleteCartItem } from '../../actions/cart_item_actions';
import { fetchProducts } from '../../actions/product_actions';
import Cart from './cart';

const mSTP = state => {
    return {
        cart: Object.values(state.entities.cart),
        products: state.entities.products
    }
};

const mDTP = dispatch => {
    return {
        fetchCart: () => dispatch(fetchCart()),
        fetchProducts: () => dispatch(fetchProducts()),
        updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
        deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId))
    }
};

export default connect(mSTP, mDTP)(Cart);