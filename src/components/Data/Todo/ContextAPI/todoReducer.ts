import React from "react";
import { Action, State, ActionType } from "../TStypes/stateTypes"


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
