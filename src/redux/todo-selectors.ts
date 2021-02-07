import {createSelector} from "reselect";
import {todoType} from "./store";


const getTodos = (state:any):Array<todoType> => {
    return state
}

export const getTodosSuperSelector = createSelector(getTodos, (todos) => {
    return todos.filter(todo => true);  
})