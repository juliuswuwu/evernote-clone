import React from 'react';

class NotebookCreateForm extends React.Component{
    constructor(props) {
        super(props);
        let userId = this.props.userId;
        this.state = {
            title: "",
            user_id: userId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createNotebook((this.state).then(()=> this.closeModal()))
        this.setState({title: ""})
    }
    
    render(){
        return(
            <>

            </>
        )
    }
}

export default NotebookCreateForm; 