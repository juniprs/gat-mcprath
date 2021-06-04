import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Navbar from '../components/navbar/navbar';

const App = () => (
    <div>
        <header>
            <Navbar />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/register" component={SignupFormContainer}/>
            <Route exact path="/" />
        </Switch>
    </div>
);

export default App;