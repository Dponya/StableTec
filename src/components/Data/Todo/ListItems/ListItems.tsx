import React, { useContext } from 'react';
import { ContextApp } from '../Main'
import { ActionType } from '../context/types/stateTypes';
import { Task } from '../context/types/taskTypes';

export const ListItems: React.FC = () => {

    const { state, changeState } = useContext(ContextApp);

    const removeTask = (taskForRemoving: Task) => {
        changeState({ type: ActionType.Remove, payload: taskForRemoving })
    }
    const toggleReadiness = (taskForChange: Task) => {
        changeState({ type: ActionType.Toggle, payload: taskForChange })
    }

    return (
        <>
            <ul>
                {state.tasks.map((task, i) => (
                    <li key={i} className={task.isDone ? 'ready' : null}>
                        <label>
                            <input type="checkbox" onChange={() => toggleReadiness(task)} checked={task.isDone} />
                        </label>
                        <div className="task-name">
                            {task.name}
                        </div>
                        <button className='remove-button' onClick={() => removeTask(task)}>
                            X
                    </button>
                    </li>
                ))}
            </ul>
        </>
    )
}