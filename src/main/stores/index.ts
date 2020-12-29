import React from "react";
import { TodoStore } from "./TodoStore";
import { WeatherStore } from "./WeatherStore";

export const stores = Object.freeze({
    todoStore: new TodoStore(),
    weatherStore: new WeatherStore(),
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;