import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mSTP = ({ session }) => {
    return {
        currentUser: session.id
    }
};

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(mSTP, mDTP)(Navbar);