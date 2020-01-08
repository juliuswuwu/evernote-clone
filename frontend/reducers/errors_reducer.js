import {combineReducer} from 'redux';

import sessionError from './session_errors_reducer'

const errorsReducer = combineReducer({
    session: sessionError,
});

export default errorsReducer;