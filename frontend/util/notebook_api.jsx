export const fetchNotebooks = () =>(
    $.ajax({
        url: '/api/notebooks',
        method: 'GET'
    })
)

export const fetchNotebook = notebookId => (
    $.ajax({
        url: `/api/notebooks/${notebookId}`,
        method: 'GET'
    })
)

export const createNotebook = notebook => (
    $.ajax({
        url: `/api/notebooks`,
        method: 'POST',
        data: {notebook}
    })
)

export const updateNotebook = notebook => (
    $.ajax({
        url: `/api/notebooks/${notebook.id}`,
        method: 'PATCH',
        data: { notebook }
    })
)

export const deleteNotebook = notebookId => (
    $.ajax({
        url: `./api/notebooks/${notebookId}`,
        method: 'DELETE'  
    })
)