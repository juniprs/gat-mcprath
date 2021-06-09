import { connect } from 'react-redux';
import { fetchCart } from '../../actions/cart_actions';
import Cart from './cart';

const mDTP = dispatch => {
    return {
        fetchCart: () => dispatch(fetchCart())
    }
};

export default connect(null, mDTP)(Cart);