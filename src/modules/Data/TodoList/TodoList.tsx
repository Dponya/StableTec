import React from 'react';
import styles from './TodoList.module.scss'
import { observer } from "mobx-react-lite";
import { FormButton } from '../TodoList/FormButton/FormButton';
import { ListItems } from '../TodoList/ListItems/ListItems';
import { useStore } from '../../../main/stores/storeHooks';


export const TodoList: React.FC = observer(() => {
    const todo = useStore('todoStore');

    return (
        <div className={styles.dataWrapper}>
            <FormButton addTodo={todo.addTodo} />
            <ListItems tasks={todo.tasks} deleteTodo={todo.deleteTodo} />
        </div>
    )
});