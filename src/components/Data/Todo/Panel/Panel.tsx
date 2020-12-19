import React, { useReducer } from 'react';
import { useForm } from "react-hook-form";
import { IReducerAction, IReducerState, testReducer } from '../context/reducer';
/* import { testReducer } from '../context/reducer'; */


type Inputs = {
    example: string,
    exampleRequired: string,
};

const initialState = {
    dOne: 'Two',
    dTwo: 'One'
}

export const Panel = () => {
    /* const [state, dispatch] = useReducer(testReducer, []) */
    const [task, changeTask] = useReducer<React.Reducer<IReducerState, IReducerAction>>(testReducer, initialState);
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();
    const onSubmit = (data: any) => (changeTask({ type: 'CHANGE', payload: { dOne: data, dTwo: data } }))

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="exampleRequired" ref={register({ required: true })} />

            {errors.exampleRequired && <span>Please, enter your task</span>}

            <input type="submit" value="Add new Task" />
        </form>
    )
}