import { connect } from 'react-redux';
import { createCartItem } from '../../actions/cart_item_actions';
import { fetchProduct } from '../../actions/product_actions';
import SingleProduct from './single_product';

const mSTP = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.productId]
    }
};

const mDTP = dispatch => {
    return {
        fetchProduct: productId => dispatch(fetchProduct(productId)),
        createCartItem: cartItem => dispatch(createCartItem(cartItem))
    }
};

export default connect(mSTP, mDTP)(SingleProduct);