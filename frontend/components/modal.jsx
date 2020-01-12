import React from 'react';
import {closeModal} from '../actions/modal_actions';
import { connect } from 'react-redux';
import ProfileModalContainer from '../components/home/profile_modal_container'

function Modal({modal, closeModal}){
    if(!modal){
        return null;
    }

    let component;
    let ModalTypeBackground;
    let ModalTypeChild;
    let clickAction;

    switch(modal){
        case 'profile':
            component = <ProfileModalContainer/>;
            ModalTypeBackground= 'modal-background';
            ModalTypeChild= "modalChild";
            clickAction = closeModal;
            break;
        default:
            return null;

    }

    return (
        <div>
            <div className={`${ModalTypeBackground}`} onClick={clickAction}>
                <div className={`${ModalTypeChild}`} onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        </div>
    );
}

const mSTP = state => {
    return{
        modal: state.ui.modal
    }
}

const mDTP = dispatch =>{
   closeModal: () => dispatch(closeModal())
}

export default connect(mSTP, mDTP)(Modal)