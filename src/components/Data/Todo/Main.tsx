import React, { useState } from 'react';
import { ContextApp, initialState } from './context/reducer';
import { ListItems } from './ListItems/ListItems';
import styles from './Main.module.css'
import { Panel } from './Panel/Panel';

export const Main = () => {
    return (
        <ContextApp.Provider value={initialState}>
            <div className={styles.mainWrapper}>
                <Panel />
                <ListItems />
            </div>
        </ContextApp.Provider>
    )
}