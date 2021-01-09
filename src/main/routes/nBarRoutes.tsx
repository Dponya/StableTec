import React from 'react';
import { Route } from 'react-router-dom';
import { TodoList } from '../../modules/Data/TodoList/TodoList';
import { Weapons } from '../../modules/Inventory/Weapons/Weapons';
import { Special } from '../../modules/Stats/Special/Special';

export const StatsRoute = () => {
    return (
        <div>
            <Route exact path='/stats' render={() => <Special />} />
            <Route exact path='/stats/special' render={() => <Special />} />
        </div>)
}

export const InvRoute = () => {
    return (
        <div>
            <Route exact path='/inv' render={() => <Weapons />} />
            <Route exact path='/inv/weapons' render={() => <Weapons />} />
        </div>
    )
}

export const QuestRoute = () => {
    return (
        <div>
            <Route exact path='/data' render={() => <TodoList />} />
            <Route exact path='/data/quest' render={() => <TodoList />} />
        </div>
    )
}