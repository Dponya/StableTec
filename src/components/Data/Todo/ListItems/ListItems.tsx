import { stat } from 'fs';
import React, { useContext } from 'react';
import { ContextApp } from '../context/reducer';

export const ListItems = () => {

    const { state, dispatch } = useContext(ContextApp);

    return (
        <div>
            {state.map((li: React.ReactNode) => (
                <li>{li}</li>
            ))}
        </div>
    )
}