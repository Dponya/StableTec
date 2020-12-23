import { Dispatch } from "react";

export type Task = {
    name: string;
    isDone: boolean
}

export type Tasks = Task[];

export type TaskName = string;

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

export type ContextState = {
    state: State;
    changeState: Dispatch<Action>
}
