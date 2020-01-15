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
            <div>
                <h1>ALL NOTES</h1>
                <h2>{notes.length}</h2>
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
            </div>
        )
    }

}

export default NoteIndex; 