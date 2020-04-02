import {connect} from "react-redux";
import {fetchNotebook, deleteNotebook} from "../../../actions/notebook_actions";
import {fetchCurrentNotebook} from "../../../actions/notebook_note_actions";

import NotebookShow from "./notebook_show.jsx";

const mSTP = (state, ownProps)=> ({
    id: parseInt(ownProps.match.params.id),
    notebook: state.entities.notebooks[ownProps.match.params.id],
})

const mDTP = (dispatch) => ({
    fetchNotebook: (id) => dispatch(fetchNotebook(id)),
    deleteNotebook: (id) => dispatch(deleteNotebook(id)),
    fetchCurrentNotebook: (notebookId) => dispatch(fetchCurrentNotebook(notebookId))
})

export default connect(mSTP, mDTP)(NotebookShow)