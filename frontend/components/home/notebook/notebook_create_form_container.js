import {connect} from "react-redux";
import NotebookCreateForm from "./notebook_create_form";
import {createNotebook} from "../../../actions/notebook_actions";

const mSTP = (state) => ({
    userId: state.session.currentUser.id
})

const mDTP = (dispatch) => ({
    createNotebook: (notebook) => dispatch(createNotebook(notebook))
})

export default connect(mSTP, mDTP)(NotebookCreateForm);
