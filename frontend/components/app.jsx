import React from 'react'
import {Switch, Redirect} from 'react-router-dom'
import {Provider, render} from 'react-dom'
import LoginContainer from './session_form/login_form_container';
import SignupContainer from './session_form/signup_form_container';
import fourOfour from './error/four_zero_four';
import {Link, Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal';
import NoteShowContainer from './home/note/note_show_container';
import NoteIndexContainer from './home/note/note_index_container';
import NewNoteContainer from './home/note/new_note_container';



const app = () => (
    <div className="header-div">

            <Modal/>
            {/* <Route path="/" component={AllAppsComponents} */}
        <ProtectedRoute exact path="/app/notes/:noteId" component={NoteShowContainer} />
        <ProtectedRoute exact path="/app/notes" component={NoteIndexContainer}/>
            {/* <Route exact path="/app/new-note" component={NewNoteContainer} /> */}
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <Route exact path="/" component={GreetingContainer} />
        {/* <Switch>
            <Route path="/:anything_else" component={fourOfour}/>
            
        </Switch> */}


    </div>
);

export default app;

// render() {
//     <switch>
//         <Route exact="/app/notes/:noteId"></Route>
//     </switch>
// }