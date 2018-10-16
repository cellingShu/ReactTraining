import * as types from './actionTypes';
import axios from 'axios';
import Api from '../util/api';

export function receiveData(res) {

    return {
        type: types.FETCH_TODO_LIST_REQ,
        dataSource: res,
    }
}

export function postDataRequest() {
    return {
        type: types.POST_TODO_LIST_REQ,
    };
}


export function fecthToDoList() {
    return (dispatch) => {
        // dispatch(requestData())    
        return new Promise((resolve, reject) => {
            Api.axios.get(Api.todo.list).then(res => {
                dispatch(receiveData(res.data));

            });
        })
    }
}

export function submitTask(name) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(postDataRequest())
            Api.axios.post(Api.todo.add, { name }).then(res => {
                this.fecthToDoList();
            });
        })
    }
}

export function changeItem(toDoItem, flag) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            Api.axios.post(Api.todo.change + toDoItem.id).then(res => {
                this.fecthToDoList();
            });
        })
    }
}

export function removeItem(toDoItem) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            Api.axios.post(Api.todo.remove + toDoItem.id).then(res => {
                this.fecthToDoList();
            });
        })
    }
}

