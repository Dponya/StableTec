import React from 'react';
import { Route } from 'react-router-dom';
import { Special } from '../../modules/Stats/Special/Special';

export const StatsRoute = () => {
    return (
        <div>
            <Route exact path='/stats' render={() => <Special />} />
            <Route exact path='/stats/special' render={() => <Special />} />
        </div>)
}