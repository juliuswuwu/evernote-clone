import * as NoteAPIUtil from '../util/note_api';

export const RECEIVE_NOTES = "RECEIVE_NOTES"
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
// export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS"

const receiveNotes = notes => ({
    type: RECEIVE_NOTES,
    notes
})

const receiveNote = note => ({
    type: RECEIVE_NOTE,
    note
})

const removeNote = noteId => ({
    type: REMOVE_NOTE,
    noteId
})

export const fetchNotes = () => dispatch => (
    NoteApiUtil.fetchNotes()
        .then(
            notes => dispatch(receiveNote(notes))
        )
)

export const fetchNote = noteId => dispatch => (
    NoteApiUtil.fetchNote(noteId)
        .then(
            note => dispatch(receiveNote(note))
        )
)

export const createNote = note => dispatch => (
    NoteApiUtil.createNote(note)
        .then(
            note => dispatch(receiveNote(note))
        )
)

  export const updateNote = note => dispatch => (
    
    NoteApiUtil.updateNote(note)
        .then(
        updatedNote => dispatch(receiveNote(updatedNote))
        )
  )

  export const deleteNote = noteId => dispatch => (
      NoteApiUtil.deleteNote(noteId)
        .then(
            removedNote => dispatch(removedNote(removedNote))
        )
  )