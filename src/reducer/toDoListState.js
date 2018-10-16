import * as Types from '../actions/actionTypes';
const initState = {
    loading: false,
    toDoList: []
}


export default function toDoListState(state = initState, actions) {

    switch (actions.type) {
        case Types.FETCH_TODO_LIST_REQ:
            return Object.assign({}, state, {

                loading: false,
                toDoList: actions.dataSource
            });
        case Types.POST_TODO_LIST_REQ:
            return Object.assign({}, state, {
                loading: true
            });
        default:
            return initState;
    }
}
