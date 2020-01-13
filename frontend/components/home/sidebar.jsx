import {Link} from 'react-router-dom';
import React from 'react';
// import { openModal } from '../../actions/modal_actions';

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.handleModal = this.handleModal.bind(this);
    }


    handleModal(){
        this.props.openModal('profile');
    }
    render(){
        // debugger;
        const { currentUser } = this.props;

        // let {openModal} = this.props;
            // console.log(this.props);
        return(
            
            <div className="side-bar-wrapper">
                <div className= "side-bar-container">
                    <button className="profile-button" onClick={this.handleModal}>{currentUser.email}⌄</button>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
        )
    }
}

    export default Sidebar;

    

        

