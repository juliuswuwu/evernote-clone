import {RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK} from "../actions/notebook_actions";

const notebooksReducer =(state={}, action) =>{
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_NOTEBOOKS:
            return Object.assign({},state);
        case RECEIVE_NOTEBOOK:
            return Object.assign({},state, {[action.notebook.id]: action.notebook});
        case REMOVE_NOTEBOOK:
            delete nextState[action.notebookId]
            return nextState
        default:
            return state;
    }
};

export default notebooksReducer;