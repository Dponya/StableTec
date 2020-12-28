import React from 'react';
import { observer } from "mobx-react-lite";

interface IListItemsProps {
    tasks: Array<any>;
    deleteTodo: (e: any, id: number) => void;
}

export const ListItems: React.FC<IListItemsProps> = observer(({ tasks, deleteTodo }) => {

    let taskList = tasks.map((t: any) => <li onClick={(e) => deleteTodo(e, t.id!)}>{t.task}</li>)
    return (
        <div>
            <ul>
                {taskList}
            </ul>
        </div>
    )
})