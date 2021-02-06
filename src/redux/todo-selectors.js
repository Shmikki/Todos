import {createSelector} from "reselect";


const getTodos = (state) => {
    return state
}

export const getTodosSuperSelector = createSelector(getTodos, (todos) => {
    return todos.filter(todo => true);  
})