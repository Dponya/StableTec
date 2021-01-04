import React from 'react';
import { Route } from 'react-router-dom';
import { Header, Data, Stats, Footer, Map, Inventory, Radio, Weather } from '../../modules/index';
import styles from '../../App.module.css'

export const Routes = () => {

    return (
        <div className={styles.appWrapper}>
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