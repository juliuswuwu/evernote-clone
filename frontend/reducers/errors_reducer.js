import {combineReducers} from 'redux';

import sessionError from './session_errors_reducer'

const errorsReducer = combineReducers({
    session: sessionError,
});

export default errorsReducer;