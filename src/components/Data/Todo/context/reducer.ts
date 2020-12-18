import React from "react";

export const ContextApp = React.createContext(null);

export const initialState = {
    app: {
        test: 'test_context'
    }
};

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