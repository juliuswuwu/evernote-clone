import React from 'react';
import NotebookIndexItem from './notebook_index_item';
import {Link} from 'react-router-dom';
import NotebookCreateFormContainer from './notebook_create_form_container';

class NotebookIndex extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.openModal = this.openModal.bind(this);
    }

    componentDidMount(){
        this.props.fetchNotebooks();
        this.props.fetchNotes();
    }
    
    openModal(){
        let modal = document.querySelector(".notebook-create-form-modal");
        if (modal){
            modal.classList.add("notebook-create-form-modal-active");
        }
    }

    render(){
        // const {notebooks, deleteNotebooks, updateNotebook} = this.props;
        let notebooks;
        if (this.props.notebooks !== undefined && this.props.notebooks.length !== 0){
            notebooks = this.props.notebooks.map(notebook => (
                <NotebookIndexItem
                    key={notebook.id}
                    notebook={notebook}
                    noteIds={notebook.noteIds}
                    deleteNotebook={this.props.deleteNotebook}
                />
            ))
        }


        return(
            <>  
                <h2>Notebooks</h2>
                <h3>My notebook list</h3>
                <p onClick={this.openModal} className="new-notebook-btn">
                    New Notebook
                </p>
                <NotebookCreateFormContainer />
                

                <section className="notebooks-frame">
                    <ul className="notebooks-list">
                        <ul className="notebooks-list-header">
                            <li>TITLE</li>
                            <li>ACTIONS</li>
                        </ul>
                        {notebooks}

                    </ul>
                </section>
            
            </>
        )
    }

}

export default NotebookIndex;