import {RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE} from "../actions/note_actions";

const notesReducer =(state ={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_NOTES:
            return Object.assign({}, action.notes);
        case RECEIVE_NOTE:
            return Object.assign({}, state, { [action.note.id]: action.note });
        case REMOVE_NOTE:
            delete nextState[action.noteId]
            return nextState
        default:
            return state;
    }
};

export default notesReducer;