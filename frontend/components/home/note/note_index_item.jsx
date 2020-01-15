import React from "react";
import {Link} from 'react-router-dom';

class NoteIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state ={};

    }

    previewText(){
        const alltext = "<div>" + this.props.note.body + "</div>";
        let preview = $(alltext).text().substring(0,70);
        if (alltext.length > 71){
            preview += "..."
        }
        return preview
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

                    <div className="delete-note-btn">
                        <Link to="/" onClick={() => deleteNote(note.id)}>delete</Link>
                    </div>

                </Link>
            </li>
        )
    }
}

export default NoteIndexItem; 