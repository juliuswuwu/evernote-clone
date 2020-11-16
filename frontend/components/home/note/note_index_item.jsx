import React from "react";
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import noteShowContainer from '../note/note_show_container';
class NoteIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state ={};

        this.handleModal = this.handleModal.bind(this);
    }

    previewText(){
        const allText = "<div>" + this.props.note.body + "</div>";
        let preview = $(allText).text().substring(0,70);
        if (allText.length > 71){
            preview += "..."
        }
        return preview
    }

    handleModal() {
        this.props.openModal('showPage');
    }

    render(){
        const {note, deleteNote} = this.props;
        return(
            <li className="list-of-notes">
                <Link className="edit-note-link" to={`/app/notes/${note.id}`}>
                    <div className="note-title-item">
                        <h3>{note.title}</h3>
                    </div>

                    <div className="note-preview-body">
                        {this.previewText()}
                    </div>

                </Link>
                    <div className="delete-note-btn">
                        <Link to="/" onClick={() => deleteNote(note.id)}>
                        <img className="delete-icon" src={window.delete_logo}></img>
                        </Link>
                    </div>
                
            </li>
        )
    }
}

export default NoteIndexItem; 