import React from 'react';
import styles from './Data.module.css'
import { FormButton } from './TodoList/FormButton';
import { ListItems } from './TodoList/ListItems';

export const Data: React.FC = () => {

    return (
        <div className={styles.dataWrapper}>
            <FormButton />
            <ListItems />
        </div>
    )
}