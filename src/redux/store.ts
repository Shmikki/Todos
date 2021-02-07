import {createStore} from "redux";

const SET_COMPLETED = "SET_COMPLETED";
const DELETE_TODO = "DELETE_TODO";
const ADD_TODO = "ADD_TODO";

type setCompletedActionType = {
    type: typeof SET_COMPLETED
    id: number
}

export function setCompleted(index:number) : setCompletedActionType{
    return {
        type: SET_COMPLETED,
        id : index
    }
}

type deleteTodoActionType = {
    type: typeof DELETE_TODO
    id: number
}

export function deleteTodoActionCreator(index:number):deleteTodoActionType{
    return {
        type: DELETE_TODO,
        id: index
    }
}

type addTodoActionType = {
    type: typeof ADD_TODO,
    task: string
}

export const addTodoActionCreator = (text:string):addTodoActionType => {
    return {
            type: ADD_TODO,
            task : text
        }
}

export type todoType = {
    index: number
    task: string
    completed: boolean
}

const todos: Array<todoType> = [
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

let id:number = todos.length + 1;

function todosReducer(state = todos,action:any) : Array<todoType>{
    switch (action.type){
        case SET_COMPLETED:
           return [...state.map(todo =>
            action.id === todo.index
                ? {...todo ,completed: !todo.completed }
                : todo
        )];
        case DELETE_TODO:
            return state.filter(item => item.index !== action.id );
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