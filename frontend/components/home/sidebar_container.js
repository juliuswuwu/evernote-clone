import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal, toggleModal } from '../../actions/modal_actions';
import {createNote} from '../../actions/note_actions'
import Sidebar from './sidebar';
import {fetchNotes} from '../../actions/note_actions';




const mSTP  = (state, ownProps)=>{

    return{
        currentUser: state.entities.users[state.session.id],
        notes: Object.values(state.entities.notes),
        ownProps
    }
};

const mDTP = dispatch =>{ 

    return{
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()), 
        toggleModal: (modal) => dispatch(toggleModal(modal)),
        createNote: note => dispatch(createNote(note))
    }
};
export default connect(mSTP, mDTP)(Sidebar);