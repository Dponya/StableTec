import React from "react";
import { TodoStore } from "./TodoStore";

export const stores = Object.freeze({
    todoStore: new TodoStore(),
    //anotherCounterStore: new TodoStore()
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;