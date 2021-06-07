import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavbarContainer from '../components/navbar/navbar_container';
import ProductIndexContainer from '../components/products/product_index_container';
import SingleProductContainer from '../components/products/single_product_container';
import Splash from '../components/splash';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={SignupFormContainer} />
      <Route
        exact
        path="/products/:productId"
        component={SingleProductContainer}
      />
      <Route exact path="/products" component={ProductIndexContainer} />
      <Route exact path="/" component={Splash} />
      <Route render={() => <Redirect to={{ pathname: "" }} />} />
    </Switch>
  </div>
);

export default App;