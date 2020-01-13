export const fetchNotes = notes => (
    $.ajax({
        url: '/api/notes',
    })
)

export const fetchNote = noteId => (
    $.ajax({
        url: `/api/notes/${noteId}`
    })
)

export const createNote = note => (
    $.ajax({
        url: `/api/notes`,
        method: 'POST',
        data: {note}
    })
)

export const updateNote = note => (
    $.ajax({
        url: `/api/notes/${note.id}`,
        method: 'PATCH',
        data: {note}
    })
)

export const deleteNote = noteId =>(
    $.ajax({
        url: `./api/notes/${noteId}`,
        method: 'DELETE'
    })
)

// export const addNote = note => (
//     $.ajax({
//         url: `/api/notes`,
//         method: 'POST',
//         data: {note}
//     });
// )
