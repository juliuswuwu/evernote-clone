import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { receiveErrors } from '../../actions/session_actions';

import SessionForm from './session_form';

const mSTP = ({errors}) =>{
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Create account</Link>
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        login: (user) => dispatch(login(user)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors))
    };
};

export default connect(mSTP, mDTP)(SessionForm);