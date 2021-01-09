import React from 'react';
import { observer } from "mobx-react-lite";
import { ITask } from '../../../../library/common/Typing/interfaces';
import styles from '../TodoList.module.scss';

interface IListItemsProps {
    tasks: Array<ITask>;
    deleteTodo: (id: number) => void;
}

export const ListItems: React.FC<IListItemsProps> = observer(({ tasks, deleteTodo }) => {

    const taskList = tasks.map((task: ITask) => <li key={task.id} onClick={(e: React.MouseEvent) => deleteTodo(task.id!)} className={styles.dataText}>{task.filteredTask}</li>);
    return (
        <div>
            <ul>
                {taskList}
            </ul>
        </div>
    )
})