import * as NotebookAPIUtil from '../../frontend/util/notebook_api';

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";

const receiveNotebooks = notebooks => ({
    type: RECEIVE_NOTEBOOKS,
    notebooks
});

const receiveNotebook = notebook => ({
    type: RECEIVE_NOTEBOOK,
    notebook
});

const removeNotebook = notebookId => ({
    type: REMOVE_NOTEBOOK,
    notebookId
});

export const fetchNotebooks = () => (
    NotebookAPIUtil.fetchNotebooks()
        .then(
            notebooks => dispatch(receiveNotebooks(notebooks))
        )
)

export const fetchNotebook = notebookId => dispatch => (
    NotebookAPIUtil.fetchNotebook(notebookId)
        .then(
            notebook => dispatch(receiveNotebook(notebook))
        )
)

export const createNotebook = notebook => dispatch => (
    NotebookAPIUtil.createNotebook(notebook)
        .then(
            notebook => dispatch(receiveNotebook(notebook))
        )
)

export const updateNotebook = notebook => dispatch => (
    NotebookAPIUtil.updateNotebook(notebook)
        .then(
            notebook => dispatch(receiveNotebook(notebook))
        )
)

export const deleteNotebook = notebookId => dispatch => (
    NotebookAPIUtil.deleteNotebook(notebookId)
        .then(
            () => dispatch(removeNotebook(notebookId))
        )
)