import React from 'react';
// import {fetchNote, updateNote} from "../../../util/note_api";
import ReactQuill from 'react-quill';
// import debounce from 'lodash';
import {Form, Field} from 'react-final-form';

class NoteShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: "",
            title: "",
            body: "",
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
        // this.handleModal = this.handleModal.bind(this);
        // this.handleUpdateNote = this.handleUpdateNote.bind(this);

    }

    componentDidMount(){
        this.props.fetchNote(this.props.match.params.noteId)
            .then((payload)=> this.setState(payload.note))
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.note !== undefined) {
            this.setState({
                title: nextProps.note.title,
                body: nextProps.note.body,
                user_id: nextProps.note.userId
            });
        }
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
                this.setState({[field]: e.currentTarget.value})
            }else{
                this.autoUpdateTime();
                this.setState({ [field]: e });
            }
        };
    }

    // handleUpdateNote(){
    //     this.props.updateNote(this.state)
    //         .then(()=> this.props.history.push('/app/notes'))
    // }

   

    render(){
        return(
            <div className="text-editor-box">
                <input
                    type="text"
                    value={this.state.title}
                    placeholder="title"
                    onChange={this.update("title")}
                />
                <ReactQuill
                    theme="snow"
                    modules={this.modules}
                    value={this.state.body}
                    onChange={this.update("body")}
                    placeholder="Start typing..."
                    autoFocus={this.state.title.length > 0 ? true : false}
                />
                {/* <button
                    className="add-note"
                    onClick={this.handleUpdateNote}>Update Note
                </button> */}
            </div>
        )
    }
}

export default NoteShow;