import {connect} from 'react-redux';
import NoteShow from './note_show';
import {fetchNote, fetchNotes, updateNote} from "../../../actions/note_actions";
import {withRouter} from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    noteId: parseInt(ownProps.match.params.id)
})

const mDTP = dispatch =>({
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: (nodeId) => dispatch(fetchNote(nodeId)),
    updateNote:(id) => dispatch(updateNote(id)),
})

export default withRouter(connect(mSTP, mDTP)(NoteShow))