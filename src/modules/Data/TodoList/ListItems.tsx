import React from 'react';
import { observer } from "mobx-react-lite";
import { ITask } from '../../../library/common/Typing/interfaces';

interface IListItemsProps {
    tasks: Array<ITask>;
    deleteTodo: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

export const ListItems: React.FC<IListItemsProps> = observer(({ tasks, deleteTodo }) => {

    let taskList = tasks.map((t: any) => <li onClick={(e: any) => deleteTodo(e, t.id!)}>{t.task}</li>)
    return (
        <div>
            <ul>
                {taskList}
            </ul>
        </div>
    )
})