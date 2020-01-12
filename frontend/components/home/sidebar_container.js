import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal, toggleModal } from '../../actions/modal_actions';
import Sidebar from './sidebar'

const mSTP  = ({entities, session})=>{
    return{
        currentUser: entities.users[session.id]
    }
}

const mDTP = dispatch =>{
    return{
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        toggleModal: (modal) => dispatch(toggleModal(modal))
    };
};

export default connect(mSTP, mDTP)(Sidebar);