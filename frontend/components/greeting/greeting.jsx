import React from 'react';
import { Link } from 'react-router-dom' ;
import Splash from './splash/splash'

const Greeting = ({ currentUser, logout }) => {
    const createSession = () => (
       
        <div>
            <div className="splash-nav-background wrapper" >
                <div className="splash-nav-bar">
                    <div className='splash-nav-bar-left'>
                        {<img className="evernote-full-name-logo" src={window.nevernoteURL} />}

                        <div className="splash-portfolio">
                            <button className="github">
                                <a href="http://github.com" target='_blank'>github</a>
                            </button>
                            <button className="linkedin">
                                    <a href="http://linkedin.com" target='_blank'>linkedin</a>
                            </button>
                            <button className="angelList">
                                    <a href="http://angelList.com" target='_blank'>angelList</a>
                            </button>
                        </div>
                    </div>
                    <div className='splash-nav-bar-right'>
                        <Link to="/signup">
                            <button className="splash-nav-signup-button">Sign up</button>
                        </Link>
                        <h5 className="or"> or </h5>
                        <Link to="/login">
                            <button className="splash-nav-login-button">Log in</button>
                        </Link>
                    </div>
                        

                </div>
            </div>
            <Splash/>
        </div>
    );
    const userGreeting = () => (
        <hgroup className="greeting-header">
            <p> hi, {currentUser.email} </p>
            <button className="logout-button" onClick={logout}>Log Out</button>
        </hgroup>
    );
    return currentUser ? userGreeting() : createSession();
}
export default Greeting;

