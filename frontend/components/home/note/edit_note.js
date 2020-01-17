// import {connect} from 'react-redux';
// import React from 'react';
// import {fetchNote, updateNote} from '../../../actions/note_actions';

// class EditNote extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = this.props.note; 
//     }
//     componentDidMount(){
//         this.props.fetchNote(this.props.state.params.noteId);
//     }


//     update(field) {
//         return e => {
//             if (field === 'title') {
//                 this.autoUpdateTime();
//                 this.setState({ [field]: e.currentTarget.value })
//             } else {
//                 this.autoUpdateTime();
//                 this.setState({ [field]: e });
//             }
//         };
//     }


//     render(){
//         const {action, formType, note} = this.props;
//         if (!note) return null;
//         return(
//           <>
//                 <input
//                     type="text"
//                     className="new-note-title"
//                     value={this.state.title}
//                     placeholder="Untitle"
//                     onChange={this.update("title")}
//                 />

//                 <ReactQuill
//                     theme="snow"
//                     modules={this.modules}
//                     value={this.state.body}
//                     placeholder="Start writing here or just copy and pasting..."
//                     onChange={this.update("body")}
//                     autoFocus={this.state.title.length > 0 ? true : false}
//                 />

//           </>  
//         )
//     }
// }


// const mSTP =(state, ownProps) => ({
//     note: state.entities.notes[ownProps.match.params.noteId],
//     formType: 'UpdateNote'
// })

// const mDTP =(dispatch) => ({
//     fetchNote: noteId => dispatch(fetchNote(noteId)),
//     action: note => dispatch(updateNote(note))
// })

// export default connect(mSTP, mDTP)(EditNote)