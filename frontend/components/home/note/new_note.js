import React from 'react';
import ReactQuill from 'react-quill';
import { openModal } from '../../../actions/modal_actions';

class NewNote extends React.Component{
    constructor(props){
        super(props);
        this.autoUpdateTime = this.autoUpdateTime.bind(this);
        this.state = {
            title: "",
            body: ""
        };

        this.module = {
            toolbar: [
                [{ font: [] }],
                [{ size: ["small", false, "large", "huge"] }],
                ["bold", "italic", "underline", "strike"],
                [{ color: [] }, { background: [] }],
                ["blockquote", "code-block"],
                [{ align: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                ["clean"],
                ["link", "image", "video", "formula"]
            ]
        }

    }

    autoUpdateTime() {
        if (this.autosaveTimer) {
            clearTimeout(this.autosaveTimer);
        }
        this.autosaveTimer = setTimeout(() => {
            this.props.updateNote(this.state);
            this.autosaveTimer = null;
        }, 1000);
    }

    

    update(field) {
        return e => {
            if (field === 'Title') {
                this.autoUpdateTime();
                this.setState({ [field]: e.target.value })
            } else {
                this.autoUpdateTime();
                this.setState({ [field]: e });
            }
        };
    }

    render(){
        const {openModal, closeModal} = this.props;
        return(
            <div>
                <input
                    type="text"
                    className = "new-note-title"
                    value={this.state.title}
                    placeholder="Title"
                    onChange={this.update("title")}
                />

                <ReactQuill
                    theme="snow"
                    modules={this.modules}
                    value={this.state.body}
                    placeholder="Start writing here or just copy and pasting..."
                    onChange={this.update("body")}
                    autoFocus={this.state.title.length > 0 ? true : false}
                />


            </div>
        )
    }

}

export default NewNote;