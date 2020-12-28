import React from 'react';
import styles from './Data.module.css'
import { observer } from "mobx-react-lite";
import { FormButton } from './TodoList/FormButton';
import { ListItems } from './TodoList/ListItems';
import { useStore } from '../../main/stores/storeHooks';


export const Data = observer(() => {
    const todo = useStore('todoStore');

    return (
        <div className={styles.dataWrapper}>
            <FormButton addTodo={todo.addTodo} />
            <ListItems tasks={todo.tasks} deleteTodo={todo.deleteTodo} />
        </div>
    )
});