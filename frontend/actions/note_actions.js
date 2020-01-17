import * as NoteAPIUtil from '../../frontend/util/note_api'

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
    NoteAPIUtil.fetchNotes()
        .then(
            notes => dispatch(receiveNotes(notes))
        )
)

export const fetchNote = noteId => dispatch => (
    NoteAPIUtil.fetchNote(noteId)
        .then(
            note => dispatch(receiveNote(note))
        )
)

export const createNote = note => dispatch => (
    NoteAPIUtil.createNote(note)
        .then(
            note => dispatch(receiveNote(note)),
        )
)

  export const updateNote = note => dispatch => (
    
      NoteAPIUtil.updateNote(note)
        .then(
            note => dispatch(receiveNote(note))
        )
  )

  export const deleteNote = noteId => dispatch => (
      NoteAPIUtil.deleteNote(noteId)
        .then(
            () => dispatch(removeNote(noteId))
        )
  )