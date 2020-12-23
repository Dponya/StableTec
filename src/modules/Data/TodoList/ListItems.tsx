import React, { useContext } from 'react';
import { ActionType, Task } from '../../../library/common/reducers/todoReducer/todoTypes';
import { ContextApp } from '../../../main/context/todoContext';


export const ListItems: React.FC = () => {

    const { state, changeState } = useContext<any>(ContextApp);

    const removeTask = (taskForRemoving: Task) => {
        changeState({ type: ActionType.Remove, payload: taskForRemoving })
    }
    const toggleReadiness = (taskForChange: Task) => {
        changeState({ type: ActionType.Toggle, payload: taskForChange })
    }

    return (
        <div>
            <ul>
                {state.tasks.map((task: { isDone: any; name: any; }, i: string | number | null | undefined) => (
                    <li key={i}/*  className={task.isDone ? 'ready' : null} */>
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
        </div>
    )
}