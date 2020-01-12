import {Link} from 'react-router-dom';
import React from 'react';
import {toggleModal} from '../../actions/modal_actions';
class sidebar extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleSubmit(e) {
        this.props.closeModal();
        this.props.toggleModal();
    }

    render(){
        // debugger;
        debugger;
        return(
            <div className="wrapper">
                <Link to="/" className= "side-bar-container">
                    <button className="profile-button" onClick={() => toggleModal('profile')}>profile</button>
                    <div></div>
                    <div></div>
                    <div></div>
                </Link>
            </div>
            
        )
    }
}

    export default sidebar;

    

        

