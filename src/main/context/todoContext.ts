import React from 'react';
import { ContextState } from '../../library/common/reducers/todoReducer/todoTypes';

export const ContextApp = React.createContext<Partial<ContextState>>({});