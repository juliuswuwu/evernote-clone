import React from 'react'
import LoginContainer from './session_form/login_form_container';
import SignupContainer from './session_form/signup_form_container';
import fourOfour from './error/four_zero_four';
import {Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal';
import NoteShowContainer from './home/note/note_show_container';
import NoteIndexContainer from './home/note/note_index_container';
import NewNoteContainer from './home/note/new_note_container';
import NotebookIndexContainer from './home/notebook/notebook_index_container'


const app = () => (
    <div className="header-div">
        <Modal/>
        <ProtectedRoute exact path="/app/notes/:noteId" component={NoteShowContainer} />
        <ProtectedRoute exact path="/app/notes" component={NoteIndexContainer}/>
        <ProtectedRoute exact path="/app/notebooks" component={NotebookIndexContainer}/>
        <AuthRoute exact path="/login" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <Route exact path="/" component={GreetingContainer} />
        <Route path="/" component={fourOfour}/>
    </div>
);

export default app;
