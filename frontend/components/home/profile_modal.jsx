import React from 'react'
import GreetingContainer from '../greeting/greeting_container'


class profileModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        this.props.logout();
        this.props.closeModal();
    }

    render(){
        // debugger
        const{currentUser} = this.props;
            const profile = currentUser ? (
                <div className="profile-modal">
                    <div className="account">account</div>
                    <div className= "profile-email">{currentUser.email}</div>
                    <div className="divider"></div>
                    <div className="profile-portfolio2">
                        <button className="github2">
                            <a href="http://github.com" target='_blank'>github</a>
                        </button>
                        <button className="linkedin2">
                            <a href="http://linkedin.com" target='_blank'>linkedin</a>
                        </button>
                        <button className="angelList2">
                            <a href="http://angelList.com" target='_blank'>angelList</a>
                        </button>
                    </div>
                    <div className="divider"></div>
                    <button className="logout-btn"onClick={this.handleSubmit}>Log Out</button>
                <div className="divider"></div>
                    <div className="version">Nevernote v1.00.1</div>
                </div>
            ): (
                <div>
                    <GreetingContainer/>
                </div>
            );
            
            return (
                <div>
                    {profile}
                </div>
            )

    }
}

export default profileModal;