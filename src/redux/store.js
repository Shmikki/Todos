import {createStore} from "redux";

const SET_COMPLETED = "SET_COMPLETED";

export function setCompleted(index){
    return {
        type: SET_COMPLETED,
        id : index
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


function todosReducer(state = todos,action){
    switch (action.type){
        case SET_COMPLETED:
           return [...state.map((todo, index) =>
            action.id === index + 1
                ? {...todo ,completed: !todo.completed }
                : todo
        )]
        default :
            return state
    }
}

let store = createStore(todosReducer);
export default store;