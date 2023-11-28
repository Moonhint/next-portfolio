import type { Dispatch } from "react";
import { useReducer } from "react"

// An enum with all the types of actions to use in our reducer
export enum ToDoActionKind {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    UPDATE = 'UPDATE',
}

// An interface for our state
interface ToDo {
    id: number;
    text: string;
    hours: number;
}

// An interface for our actions
interface ToDoAction {
    type: ToDoActionKind;
    payload: { tId?: number, todo?: ToDo };
}

// An interface for our state
type TodoState = { todos: ToDo[] };

const reducer = (state: TodoState, action: ToDoAction): TodoState => {
    switch (action.type) {
        case ToDoActionKind.ADD: {
            if (action.payload.todo === undefined) {
                return state;
            }
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload.todo
                ] 
            };
        }
        case ToDoActionKind.REMOVE: {
            return {
                ...state,
                todos: state.todos.filter(n => n.id !== action.payload.tId)
            }
        }
        case ToDoActionKind.UPDATE: {
            if (action.payload.todo === undefined) {
                return state;
            }
            return {
                ...state,
                todos: state.todos.map(n => {
                    if (n.id === action.payload.tId && action.payload.todo !== undefined){
                        return action.payload.todo;
                    }else{
                        return n;
                    }
                })
            };
        }
        default: {
            return state;
        }
    }
}

const useTodo = () => {
    // Initial state
    const initialState: TodoState = {
        todos: [],
    };
    const [ state, dispatch ]: [TodoState, Dispatch<ToDoAction>] = useReducer(reducer, initialState);

    return {
        todoState: state,
        todoDispatch: dispatch,
    }
}

export default useTodo;