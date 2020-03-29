import {connect} from "react-dom";
// import { fetchNotebooks, fetchNotebook, deleteNotebook, updateNotebook } from '../../../actions/notebook_actions';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';


class NotebookIndexItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.fetchNotes();
    }

    render(){
        return(
            <>
                
            </>
        )
    }

}

export default NotebookIndexItem;
