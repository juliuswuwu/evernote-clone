import React from 'react';
import {fetchNote, updateNote} from "../../../util/note_api";
import ReactQuill from 'react-quill';
import debounce from 'lodash';

class NoteShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            body: ""
        }
        
        // Quill text-editor api
            this.modules = {
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
        this.update = this.update.bind(this);
        this.autoUpdateTime =this.autoUpdateTime.bind(this);
    }

    componentDidMount(){
        this.props.fetchNote(this.props.noteId);
    }

    autoUpdateTime(){
        if (this.autosaveTimer) {
            clearTimeout(this.autosaveTimer);
        }
        this.autosaveTimer = setTimeout(() => {
            this.props.updateNote(this.state);
            this.autosaveTimer = null;
        }, 1000);
    }

    update(field){
        return e =>{
            if (field === 'title'){
                this.autoUpdateTime();
                this.setState({[field]: e.target.value})
            }else{
                this.autoUpdateTime();
                this.setState({ [field]: e });
            }
        };
    }


    render(){
        return(
            <div className="text-editor-box">
                <input
                    type="text"
                    value={this.state.title}
                    placeholder="Title"
                    onChange={this.update("title")}
                />
                <ReactQuill
                    theme="snow"
                    modules={this.modules}
                    value={this.state.body}
                    onChange={this.update("body")}
                    autoFocus={this.state.title.length > 0 ? true : false}
                />
            </div>
        )
    }
}

export default NoteShow;