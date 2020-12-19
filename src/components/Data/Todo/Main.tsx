import React from 'react';
import { ConT, ContextApp } from './context/reducer';
import { ListItems } from './ListItems/ListItems';
import styles from './Main.module.css'
import { Panel } from './Panel/Panel';

export const Main = () => {

    const dTypes: ConT = {
        dOne: 'Hello',
        dTwo: 'TypeScript',
    }

    return (
        <ContextApp.Provider value={dTypes}>
            <div className={styles.mainWrapper}>
                <Panel />
                <ListItems />
            </div>
        </ContextApp.Provider>
    )
}