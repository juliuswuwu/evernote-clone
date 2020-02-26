import React from 'react';
import NotebookIndexItem from './notebook_index_item';
import {Link} from 'react-router-dom';

class NotebookIndex extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.props.fetchNotebooks();
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
                    openModal={this.props.openModal}
                    deleteNotebook={this.props.deleteNotebook}
                />
            ))
        }
        return(
            <>
                <h2>Notebooks</h2>
                <h3>List of Notebooks</h3>
                
            
            </>
        )
    }

}

export default NotebookIndex;