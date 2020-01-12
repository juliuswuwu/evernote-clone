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
        debugger
        const{currentUser} = this.props;
            const profile = currentUser ? (
                <div className="profile-modal">
                    <span>profile</span>
                    <span>{currentUser.email}</span>
                    <div className="profile-portfolio">
                        <button className="github">
                            <a href="http://github.com" target='_blank'>github</a>
                        </button>
                        <button className="linkedin">
                            <a href="http://linkedin.com" target='_blank'>linkedin</a>
                        </button>
                        <button className="angelList">
                            <a href="http://angelList.com" target='_blank'>angelList</a>
                        </button>
                    </div>

                    <button onClick={this.handleSubmit}>Log Out</button>
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