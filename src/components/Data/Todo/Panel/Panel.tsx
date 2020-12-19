import React, { useReducer } from 'react';
import { useForm } from "react-hook-form";
import { initialState, todoReducer } from '../context/reducer';
import { Action, ActionType, State } from '../context/types/stateTypes';
import { TaskName } from '../context/types/taskTypes';
/* import { testReducer } from '../context/reducer'; */


type Inputs = {
    example: string,
    exampleRequired: string,
};



export const Panel = () => {
    const [state, changeState] = useReducer<React.Reducer<State, Action>>(todoReducer, initialState);
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();

    const addTask = (/* event: React.FormEvent<HTMLFormElement>, */ task: TaskName) => {
        /* event.preventDefault(); */
        changeState({ type: ActionType.Add, payload: task })
        changeState({ type: ActionType.Change, payload: '' })
    }

    const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeState({ type: ActionType.Change, payload: event.target.value })
    }

    const onSubmit = (data: any) => (addTask(data))

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="exampleRequired" ref={register({ required: true })} defaultValue={state.newTask} onChange={(event) => changeTask(event)} />

            {errors.exampleRequired && <span>Please, enter your task</span>}

            <input type="submit" value="Add new Task" />
        </form>
    )
}