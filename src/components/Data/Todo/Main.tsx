import React from 'react';
import { ListItems } from './ListItems/ListItems';
import styles from './Main.module.css'
import { Panel } from './Panel/Panel';

export const Main = () => {
    return (
        <div className={styles.mainWrapper}>
            <Panel />
            <ListItems />
        </div>
    )
}