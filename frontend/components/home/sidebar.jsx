import {Link, withRouter} from 'react-router-dom';
import React from 'react';

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.handleModal = this.handleModal.bind(this);
        this.handleNewNote = this.handleNewNote.bind(this);
        this.handleCreateNote = this.handleCreateNote.bind(this);
    }

    updateComponent(){
        this.forceUpdate();
    }

    handleCreateNote(){
        this.props.history.push(`/app/notes/${this.props.notes[this.props.notes.length - 1].id}`)
    }


    handleNewNote(e){
        e.preventDefault();
        this.props.createNote({ title: "Untitled", body: "", user_id: this.props.currentUser.id, notebook_id: null})
                .then(
                    this.handleCreateNote
                )
                    this.updateComponent
    }


    handleModal(){
        this.props.openModal('profile');
    }
    render(){
        const { currentUser, ownProps } = this.props;
        if(!currentUser.email){
            return null;
        }else{
        return(
            
            <div className="side-bar-wrapper">
                <div className= "side-bar-container">
                    <button className="profile-button" onClick={this.handleModal}>{currentUser.email}⌄</button>
                    <div className="side-button1" onClick={this.handleNewNote}>
                        <button className="New-note-btn"> + New Note</button>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
        )
    }
}
}

    export default withRouter(Sidebar);

    

        

