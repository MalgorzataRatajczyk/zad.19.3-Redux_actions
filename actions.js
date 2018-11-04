import { createStore } from 'redux';
import { Provider } from "react-redux";
import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
{
    type: ADD_COMMENT
    text: 'My first comment !'
}

const REMOVE_COMMENT = 'REMOVE_COMMENT';
{
    type: REMOVE_COMMENT
    id: 20 // przykładowy id komentarza do usunięcia
}

const EDIT_COMMENT = 'EDIT_COMMENT';
{
    type: EDIT_COMMENT
    id: 20
    text: 'wyedytowany tekst komentarza'
}
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
{
    type: THUMB_UP_COMMENT,
    id

}
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
{
    type: THUMB_DOWN_COMMENT,
    id
}

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id

    }
}

function editComment() {
    return {
        type: ADD_COMMENT,
        id

    }
}

function thumbUpComment() {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}
function thumbDownComment() {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

//dispatch(addComment('nowy komentarz!'));
//dispatch(addComment('kolejny nowy komentarz!'));


const boundAddComment = text => dispatch(addComment(text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundEditComment = text => dispatch(editComment (text));
const boundThumbUpComment = id => dispatch(thumbUpComment (id));
const boundThumbDownComment = id => dispatch(thumbDownComment(id));

boundAddComment('nowy komentarz!');
boundAddComment('kolejny nowy komentarz!');
boundRemoveComment(id);
boundEditComment(text);
boundThumbUpComment(id);
boundThumbDownComment(id);