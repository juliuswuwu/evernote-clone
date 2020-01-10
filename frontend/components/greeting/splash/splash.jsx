import { Link } from 'react-router-dom'
import React from 'react';

const splash = () =>{
    return(
        <div className="splash-main-background">
                {/* <img className="splash-main-gif" src="https://media.giphy.com/media/L17xM7PvLcqJggsCYa/giphy.gif"></img> */}
            <div className="splash-main-content wrapper">
                <div className='splash-main-left'>
                    <div className="splash-main-header-text">
                        <h2>Your notes.</h2>
                        <h2>Never forget.</h2>
                        <h2>Effortless.</h2>
                    </div>

                    <div className="splash-main-text">
                        <h3>Take notes anywhere. Find information faster. Share ideas with anyone. Meeting notes, web pages, projects, to-do lists—with Nevernote as your note taking app, nothing falls through the cracks.</h3>
                    </div>

                    <Link to='/signup'>
                        <button className="splash-main-signup-button"><h1>SIGN UP FOR FREE</h1></button>
                    </Link>

                </div>

                <div className="splash-main-right">
                    <img className="splash-main-computer-image" src="/assets/computer"></img>
                </div>
            </div>

        </div>
        
    )
}

export default splash; 