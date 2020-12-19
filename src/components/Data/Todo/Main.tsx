import React, { useReducer } from 'react';
import { ContextApp, initialState, todoReducer } from './context/reducer';
import { Action, ContextState, State } from './context/types/stateTypes';
import { ListItems } from './ListItems/ListItems';
import styles from './Main.module.css'
import { Panel } from './Panel/Panel';

export const Main = () => {

    const [state, changeState] = useReducer<React.Reducer<State, Action>>(todoReducer, initialState);

    const ContextState: ContextState = {
        state,
        changeState
    };

    return (
        <ContextApp.Provider value={ContextState}>
            <div className={styles.mainWrapper}>
                <Panel />
                <ListItems />
            </div>
        </ContextApp.Provider>
    )
}