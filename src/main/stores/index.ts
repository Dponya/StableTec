import React from "react";
import { StatsStore } from "./StatsStore";
import { TodoStore } from "./TodoStore";
import { WeatherStore } from "./WeatherStore";

export const stores = Object.freeze({
    todoStore: new TodoStore(),
    weatherStore: new WeatherStore(),
    statsStore: new StatsStore(),
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;