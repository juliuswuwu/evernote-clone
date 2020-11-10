import {connect} from 'react-redux';
import {fetchNotebooks, fetchNotebook, deleteNotebook, updateNotebook} from '../../../actions/notebook_actions';
import {fetchNotes} from '../../../actions/note_actions';
import NotebookIndex from './notebook_index';
import {withRouter} from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return
        {
        notebooks: Object.values(state.entities.notebooks)
    }
}

const mDTP = dispatch => {

    return{
        fetchNotes: () => dispatch(fetchNotes()),
        fetchNotebooks: () => dispatch(fetchNotebooks()),
        fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
        updateNotebook: notebook => dispatch(updateNotebook(notebook)),
        deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
        
    }
}

export default connect(mSTP, mDTP)(NotebookIndex);