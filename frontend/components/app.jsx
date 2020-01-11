import React from 'react'
import {Switch, Redirect} from 'react-router-dom'
import {Provider} from 'react-dom'
import LoginContainer from './session_form/login_form_container';
import SignupContainer from './session_form/signup_form_container';
import fourOfour from './error/four_zero_four';
import {Link, Route} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import GreetingContainer from './greeting/greeting_container'

const app = () => (
    <div className="header-div">

            
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <Route exact path="/" component={GreetingContainer} />
        <Switch>
            <Route path="/:anything_else" component={fourOfour}/>
        </Switch>


    </div>
);

export default app;