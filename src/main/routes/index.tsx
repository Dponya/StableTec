import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../../modules/Header';
import { Data } from '../../modules/Data';
import { Stats } from '../../modules/Stats';
import { Footer } from '../../modules/Footer';
import { Map } from '../../modules/Map';
import { Inventory } from '../../modules/Inventory';
import { Radio } from '../../modules/Radio';
import { Weather } from '../../modules/Weather';

export const Routes = () => {

    return (
        <div>
            <Header />

            <Route path={'/stats'}>
                <Stats />
            </Route>

            <Route path={'/inv'}>
                <Inventory />
            </Route>

            <Route path={'/data'}>
                <Data />
            </Route>

            <Route path={'/map'}>
                <Map />
            </Route>

            <Route path={'/radio'}>
                <Radio />
            </Route>

            <Route path={'/weather'}>
                <Weather />
            </Route>

            <Footer />
        </div>
    )
}