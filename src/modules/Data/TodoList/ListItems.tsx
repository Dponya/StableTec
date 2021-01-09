import React from 'react';
import { observer } from "mobx-react-lite";
import { ITask } from '../../../library/common/Typing/interfaces';

interface IListItemsProps {
    tasks: Array<ITask>;
    deleteTodo: (id: number) => void;
}

export const ListItems: React.FC<IListItemsProps> = observer(({ tasks, deleteTodo }) => {

    const taskList = tasks.map((task: ITask) => <li key={task.id} onClick={(e: React.MouseEvent) => deleteTodo(task.id!)}>{task.filteredTask}</li>);
    return (
        <div>
            <ul>
                {taskList}
            </ul>
        </div>
    )
})