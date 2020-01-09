import React from 'react';
import { Link } from 'react-router-dom' ;


const Greeting = ({ currentUser, logout }) => {
    const createSession = () => (
        <nav className="login-signup">
            <Link to="/signup"> Sign up</Link>
            <button className="Login-button">
                <Link to="/login">Log in</Link>
            </button>
        </nav>
    );
    const userGreeting = () => (
        <hgroup className="greeting-header">
            <h2 className="greeting-header-name">
                {currentUser.email}!
            </h2>
            <button className="logout-button" onClick={logout}>Log Out</button>
        </hgroup>
    );
    return currentUser ? userGreeting() : createSession();
}
export default Greeting;
