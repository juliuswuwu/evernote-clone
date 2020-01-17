import React from "react";
import NoteIndexItem from "./note_index_item";
import {Link} from 'react-router-dom';

class NoteIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }   

    componentDidMount(){
        this.props.fetchNotes();
    }

    render(){
        const {notes, deleteNote, updateNote} = this.props;
        const {openModal, closeModal} = this.props;
        return(
            <>
                <div className="all-notes-header">
                    <h3 className="all-notes-text">All Notes</h3>
                    <h4 className="length-of-notes">{notes.length}</h4>
                </div>
                
                
                <ul className="All-notes">
                    {
                        notes.map((note)=>(
                            <NoteIndexItem
                                note={note}
                                deleteNote={deleteNote}
                                updateNote={updateNote}
                                closeModal={closeModal}
                                openModal={openModal}
                                key={note.id}
                            />
                        ))
                    }
                </ul>
            </>
        )
    }

}

export default NoteIndex; 