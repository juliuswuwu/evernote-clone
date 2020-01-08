import React from 'react'
import {Provider} from 'react-dom'
import LoginContainer from './session_form/login_form_container';
import SignupContainer from './session_form/signup_form_container';
import {Link} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import GreetingContainer from './greeting/greeting_container'

const app = () => (
    <div className="header-div">
        <header>
            <nav className="header-div">
                <Link to="/" className="header-link">
                    <h1>NeverNote</h1>
                </Link>
                <GreetingContainer />
            </nav>
        </header>
        {/* <Route exact path= "/" component={NavBarContainer} />   */}
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
    </div>
);

export default app;