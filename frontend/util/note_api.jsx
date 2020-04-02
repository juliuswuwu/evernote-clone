export const fetchNotes = notes => (
    $.ajax({
        url: '/api/notes',
        method: 'GET'
    })
)

// export const fetchNotes = (notebook_id) => {
//     let results;
//     if (notebook_id){
//         result = {
//             notebook_id: notebook_id
//         }
//     } else {
//         data = {}
//     }
//     return $.ajax({
//         url: '/api/notes',
//         method: 'GET',
//         data: results
//     })

// }


export const fetchNote = noteId => (
    $.ajax({
        url: `/api/notes/${noteId}`,
        method: 'GET'
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
