import {connect} from "react-redux";
import { fetchNotes, fetchNote, updateNote, deleteNote} from '../../../actions/note_actions';
import {withRouter} from 'react-router-dom'
import {openModal,closeModal} from '../../../actions/modal_actions';
import noteIndex from './note_index';

const mSTP = (state, ownProp) => {
    return{
    
    notes: Object.values(state.entities.notes)
}}

const mDTP = dispatch => ({
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: (noteId) => dispatch(fetchNote(noteId)),
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(noteIndex);