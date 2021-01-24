import React from "react";
import { StatsStore } from "./StatsStore";
import { TodoStore } from "./TodoStore";
import { WeaponsStore } from "./WeaponsStore";
import { WeatherStore } from "./WeatherStore";
import { AudioStore } from './AudioStore'

export const stores = Object.freeze({
    todoStore: new TodoStore(),
    weatherStore: new WeatherStore(),
    statsStore: new StatsStore(),
    weaponsStore: new WeaponsStore(),
    audioStore: new AudioStore(),
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;