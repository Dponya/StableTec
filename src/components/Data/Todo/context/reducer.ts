import React from "react";
import { contextDefaultValue } from "./types/types";

export const initialState = {
    state: ['do', 'le', 'me'],
    dispatch: null
};

export const ContextApp = React.createContext(contextDefaultValue);

export const testReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'test_update':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
};