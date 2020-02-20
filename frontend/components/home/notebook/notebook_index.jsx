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
        const {notebooks, deleteNotebooks, updateNotebook} = this.props;
        return(
            <>
                
            </>
        )
    }

}

export default NotebookIndex;