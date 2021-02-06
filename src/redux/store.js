import {createStore} from "redux";

const SET_COMPLETED = "SET_COMPLETED";
const DELETE_TODO = "DELETE_TODO";
const ADD_TODO = "ADD_TODO";

export function setCompleted(index){
    return {
        type: SET_COMPLETED,
        id : index
    }
}

export function deleteTodoActionCreator(index){
    return {
        type: DELETE_TODO,
        id: index
    }
}

export const addTodo = (text) => {
    return {
            type: ADD_TODO,
            task : text
        }

}


const todos = [
    {
        index : 1,
        task: "купить молоко",
        completed: true
    },
    {
        index : 2,
        task: "купить хлеб",
        completed: false
    },
    {
        index : 3,
        task: "купить масло",
        completed: false
    }
];

let id = 4;

function todosReducer(state = todos,action){
    switch (action.type){
        case SET_COMPLETED:
           return [...state.map(todo =>
            action.id === todo.index
                ? {...todo ,completed: !todo.completed }
                : todo
        )];
        case DELETE_TODO:
            return state.filter((item,index) => item.index !== action.id );
        case ADD_TODO:
            state.push({ index : id, task : action.task, completed: false });
            id++;
            return [...state];
        default :
            return state
    }
}

let store = createStore(todosReducer);
export default store;