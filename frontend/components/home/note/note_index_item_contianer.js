import { connect } from "react-redux";
import { fetchNotes, fetchNote, updateNote, deleteNote } from '../../../actions/note_actions';
import { withRouter } from 'react-router-dom'
import { openModal, closeModal } from '../../../actions/modal_actions';
import noteIndexItem from './note_index_item';


const mSTP = state => ({
    notes: Object.values(state.entities.note),
    note: state.entities.notes[ownProps.match.params.noteId],
});

const mDTP = dispatch => ({
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: (noteId) => dispatch(fetchNote(noteId)),
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mSTP, mDTP))(noteIndexItem);