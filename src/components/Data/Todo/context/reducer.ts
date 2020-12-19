import React from "react";

export type ConT = {
    dOne: String,
    dTwo: String,
}

export interface IReducerState {
    dOne: String,
    dTwo: String,
}

export interface IReducerAction {
    type: 'CHANGE',
    payload: IReducerState
}


export const ContextApp = React.createContext<Partial<ConT>>({});


export const testReducer = (state: IReducerState, action: IReducerAction): IReducerState => {
    switch (action.type) {
        case 'CHANGE':
            return action.payload;
        default: throw new Error('Unexpected action');
    }
}
