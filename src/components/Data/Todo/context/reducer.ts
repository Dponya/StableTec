import React from "react";
import { Action, State, ContextState, ActionType } from "../context/types/stateTypes"

export const initialState: State = {
    newTask: '',
    tasks: []
}

export const ContextApp = React.createContext<Partial<ContextState>>({});


export const todoReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.Add:
            return {
                ...state, tasks: [...state.tasks, {
                    name: action.payload,
                    isDone: false
                }]
            }
        case ActionType.Change:
            debugger;
            return {
                ...state, newTask: action.payload
            }
        case ActionType.Remove:
            return {
                ...state, tasks: [...state.tasks.filter(task => task !== action.payload)]
            }
        case ActionType.Toggle:
            return {
                ...state, tasks: [...state.tasks.map((task) => (task !== action.payload ? task : { ...task, isDone: !task.isDone }))]
            }
        default:
            return state;
    }
}
