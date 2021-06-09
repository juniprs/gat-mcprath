import { combineReducers } from 'redux';
import session from './session_reducer';
import entities from './entities_reducer';
import errors from './errors_reducer';
import cart from './cart_reducer';
import cartItem from './cart_item_reducer';

const rootReducer = combineReducers({
    session,
    entities,
    errors,
    cart,
    cartItem
});

export default rootReducer;