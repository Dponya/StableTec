import React from 'react';
import styles from './Data.module.scss'
import { observer } from "mobx-react-lite";
import { FormButton } from './TodoList/FormButton';
import { ListItems } from './TodoList/ListItems';
import { useStore } from '../../main/stores/storeHooks';


export const Data: React.FC = observer(() => {
    const todo = useStore('todoStore');

    const handleAddTodo = (e: React.FormEvent, task: string): void => {
        e.preventDefault();
        todo.addTodo(task);
    }

    const handleDeleteTodo = (e: React.FormEvent, id: number): void => {
        e.preventDefault();
        todo.deleteTodo(id);
    }

    return (
        <div className={styles.dataWrapper}>
            <FormButton addTodo={handleAddTodo} />
            <ListItems tasks={todo.tasks} deleteTodo={handleDeleteTodo} />
        </div>
    )
});