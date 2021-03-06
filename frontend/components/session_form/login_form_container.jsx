import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
    navLink: <Link to="/register">Create Account</Link>,
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(SessionForm);