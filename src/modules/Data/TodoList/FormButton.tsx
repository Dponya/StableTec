import React, { useContext } from 'react';
import { ActionType, TaskName } from '../../../library/common/reducers/todoReducer/todoTypes';
import { ContextApp } from '../../../main/context/todoContext';

export const FormButton: React.FC = () => {

    const { state, changeState } = useContext<any>(ContextApp);

    const addTask = (event: React.FormEvent<HTMLFormElement>, task: TaskName) => {
        event?.preventDefault();
        changeState({ type: ActionType.Add, payload: task })
        changeState({ type: ActionType.Change, payload: '' })
    }

    const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeState({ type: ActionType.Change, payload: event.target.value })
    }

    return (
        <div>
            <form onSubmit={(event) => addTask(event, state.newTask)}>
                <label htmlFor="todo">Todo text</label>
                <br />
                <input
                    id="todo"
                    className="todo-input"
                    onChange={(event) => changeTask(event)}
                    value={state.newTask}
                />
                <button type="submit" className="add-btn">
                    Add
                </button>
            </form>
        </div>
    )
}