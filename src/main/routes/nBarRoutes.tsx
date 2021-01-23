import React from 'react';
import { Route } from 'react-router-dom';
import { Weapons } from '../../modules/Inventory/Weapons/Weapons';
import { Special } from '../../modules/Stats/Special/Special';
import { Console } from '../../modules/Data/Console/Console';
import { Radio } from '../../modules/index';

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
            <Route exact path='/data' render={() => <Console />} />
            <Route exact path='/data/quest' render={() => <Console />} />
        </div>
    )
}

export const RadioRoute = () => {
    return (
        <div>
            <Route exact path='/radio' render={() => <Radio />} />
            <Route exact path='/radio/radio' render={() => <Radio />} />
        </div>
    )
}