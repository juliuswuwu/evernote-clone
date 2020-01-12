import {connect} from 'react-redux'
import {logout} from '../../actions/session_actions'
import profileModal from './profile_modal'
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ entities, session }) => {
    return {
        currentUser: entities.users[session.id]
    };
};

const mDTP = (dispatch) => {
    return{
        logout:() => dispatch(logout()),
        closeModal:() => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(profileModal)