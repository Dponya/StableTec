import { stat } from 'fs';
import React, { useContext } from 'react';
import { ContextApp } from '../context/reducer';

export const ListItems = () => {

    const types = useContext(ContextApp);

    return (
        <div>
            {types.dOne}
        </div>
    )
}