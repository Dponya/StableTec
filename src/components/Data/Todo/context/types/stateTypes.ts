import { Task, Tasks } from "./taskTypes";
import { Dispatch } from "react";

export type State = {
    newTask: string;
    tasks: Tasks
}

export enum ActionType {
    Add = 'Add',
    Change = 'Change',
    Remove = 'Remove',
    Toggle = 'Toggle'
}

type ActionStringPayload = {
    type: ActionType.Add | ActionType.Change,
    payload: string
}

type ActionObjectPayload = {
    type: ActionType.Toggle | ActionType.Remove,
    payload: Task
}

export type Action = ActionStringPayload | ActionObjectPayload;

/* export type Action = { type: string, payload: string | Task } */

export type ContextState = {
    state: State;
    changeState: () => Action//Dispatch<Action>
}
