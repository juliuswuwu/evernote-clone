import React from 'react';

class NotebookCreateForm extends React.Component{
    constructor(props) {
        super(props);
        let currentUser = this.props.currentUser;
        this.state = {
            title: "",
            currentUser: currentUser
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createNotebook(this.state).then(() => this.closeModal());
        this.setState({title: ""});
    }
    
    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    closeModal() {
        let modal = document.querySelector(".notebook-create-form-modal");
        if (modal) {
            modal.classList.remove("notebook-create-form-modal-active");
            this.setState({ title: "" })
        }
    }

    render(){
        return(
            <>
                <div className="notebook-create-form-modal">
                    <div className="notebook-create-form">
                        <h3>Create New Notebook</h3>
                        <p>Notebooks are useful for grouping notes around a common topic.
            They can be private or shared.</p>
                        <form>
                            <label htmlFor="notebook-title">Title</label>
                            <br />
                            <input type="text" autoFocus placeholder="Notebook Title" id="notebook-title" value={this.state.title}
                                onChange={this.handleChange}
                            />
                            <br />
                            <div className="notebook-create-form-buttons">
                                <button onClick={this.closeModal}
                                    className="cancel-notebook-create-form-button">Cancel</button>
                                <input onClick={this.handleSubmit}
                                    className="notebook-create-form-button" type="submit" value="Create" />
                            </div>
                        </form>
                    </div>
                </div>

            </>
        )
    }
}

export default NotebookCreateForm; 