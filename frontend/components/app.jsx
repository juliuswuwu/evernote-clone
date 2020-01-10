import React from 'react'
import {Switch} from 'react-router-dom'
import {Provider} from 'react-dom'
import LoginContainer from './session_form/login_form_container';
import SignupContainer from './session_form/signup_form_container';
import {Link, Route} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import GreetingContainer from './greeting/greeting_container'

const app = () => (
    <div className="header-div">
        {/* <header>
            <nav className="header-div">     
                <GreetingContainer />
            </nav>
        </header> */}

        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <Route path="/" component={GreetingContainer} />
        </Switch>


    </div>
);

export default app;