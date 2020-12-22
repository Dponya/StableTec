import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { ActionType } from '../TStypes/stateTypes';
import { TaskName } from '../TStypes/taskTypes';
import { ContextApp } from '../Main';


type Inputs = {
    example: string,
    exampleRequired: string,
};



export const Panel: React.FC = () => {
    const { state, changeState } = useContext<any>(ContextApp);
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();

    const addTask = (task: TaskName) => {
        changeState({ type: ActionType.Add, payload: task })
        changeState({ type: ActionType.Change, payload: '' })
    }

    const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeState({ type: ActionType.Change, payload: event.target.value })
    }

    const onSubmit = (data: any) => (addTask(data.exampleRequired))

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="exampleRequired" ref={register({ required: true })} defaultValue={state.newTask} onChange={(event) => changeTask(event)} />

            {errors.exampleRequired && <span>Please, enter your task</span>}

            <input type="submit" value="Add new Task" />
        </form>
    )
}