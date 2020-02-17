import React from 'react';
import { Link } from 'react-router-dom' ;
import Splash from './splash/splash';
import SidebarContainer from '../home/sidebar_container';
import NoteIndex from '../home/note/note_index_container';
import ShowPage from '../home/note/note_show_container'
const Greeting = ({ currentUser, logout }) => {
    const createSession = () => (
       
        <div>
            <div className="splash-nav-background wrapper" >
                <div className="splash-nav-bar">
                    <div className='splash-nav-bar-left'>
                        {<img className="evernote-full-name-logo" src={window.nevernoteURL} />}

                        <div className="splash-portfolio">
                            <button className="github">
                                <a href="https://github.com/juliuswuwu" target='_blank'>github</a>
                            </button>
                            <button className="linkedin">
                                <a href="https://www.linkedin.com/in/juliuswu/" target='_blank'>linkedin</a>
                            </button>
                            <button className="angelList">
                                <a href="https://angel.co/julius-wu" target='_blank'>angelList</a>
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
    // debugger;
    const userGreeting = () => (
        <hgroup className="dash-board">
        <div className="greeting-side-bar">
            <SidebarContainer/>
        </div>
        <div className="index-container">
            <NoteIndex />
        </div>
        <div className="show-page">
            <ShowPage/>
        </div>
        </hgroup>
    );
    return currentUser ? userGreeting() : createSession();
}
export default Greeting;

