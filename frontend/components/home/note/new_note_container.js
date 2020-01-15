import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import newNote from './new_note';
import {createNote, updateNote} from '../../../actions/note_actions';
import {openModal, closeModal} from '../../../actions/modal_actions';
const mSTP = state => ({

});

const mDTP = dispatch => ({
    createNote: note => dispatch(createNote(note)),
    updateNote: note => dispatch(updateNote(note)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});


export default withRouter(connect(mSTP, mDTP)(newNote));