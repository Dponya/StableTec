import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Header, Data, Stats, Footer, Inventory, Radio, Weather } from '../../modules/index';
import styles from '../../App.module.css'

export const Routes = () => {

    return (
        <div className={styles.appWrapper}>
            <Header />
            <Switch>
                <Redirect exact from={'/'} to={'/stats'} />

                <Route path={'/stats'}>
                    <Stats />
                </Route>

                <Route path={'/inv'}>
                    <Inventory />
                </Route>

                <Route path={'/data'}>
                    <Data />
                </Route>

                <Route path={'/radio'}>
                    <Radio />
                </Route>

                <Route path={'/weather'}>
                    <Weather />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}