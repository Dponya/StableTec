import React, { useReducer } from 'react';
import { todoReducer } from './ContextAPI/todoReducer';
import { Action, ContextState, State } from './TStypes/stateTypes';
import { ListItems } from './ListItems/ListItems';
import styles from './Main.module.css'
import { Panel } from './Panel/Panel';

export const initialState: State = {
    newTask: '',
    tasks: []
}

export const ContextApp = React.createContext<Partial<ContextState>>({});

export const Main: React.FC = () => {

    const [state, changeState] = useReducer<React.Reducer<State, Action>>(todoReducer, initialState);

    const ContextState: ContextState = {
        state,
        changeState
    };

    return (
        <ContextApp.Provider value={ContextState}>
            {/* <div className={styles.mainWrapper}> */}
            <Panel />
            <ListItems />
            {/* </div> */}
        </ContextApp.Provider>
    )
}