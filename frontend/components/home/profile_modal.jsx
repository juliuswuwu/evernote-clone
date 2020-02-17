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
                            <a href="https://github.com/juliuswuwu" target='_blank'>Github</a>
                        </button>
                        <button className="linkedin2">
                            <a href="https://www.linkedin.com/in/juliuswu/" target='_blank'>Linkedin</a>
                        </button>
                        <button className="angelList2">
                            <a href="https://angel.co/julius-wu" target='_blank'>AngelList</a>
                        </button>
                    </div>
                    <div className="divider"></div>
                     <button className="logout-btn"onClick={this.handleSubmit}>Sign Out</button>
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