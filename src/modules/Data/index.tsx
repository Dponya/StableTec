import React, { useReducer } from 'react';
import { initialState, todoReducer } from '../../library/common/reducers/todoReducer/todoReducer';
import { Action, State, ContextState } from '../../library/common/reducers/todoReducer/todoTypes';
import { ContextApp } from '../../main/context/todoContext';
import styles from './Data.module.css'
import { FormButton } from './TodoList/FormButton';
import { ListItems } from './TodoList/ListItems';

export const Data: React.FC = () => {

    const [state, changeState] = useReducer<React.Reducer<State, Action>>(todoReducer, initialState);

    const ContextState: ContextState = {
        state,
        changeState
    };

    return (
        <div className={styles.dataWrapper}>
            <ContextApp.Provider value={ContextState}>
                <FormButton />
                <ListItems />
            </ContextApp.Provider>
        </div>
    )
}