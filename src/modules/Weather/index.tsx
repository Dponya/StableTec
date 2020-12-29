import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../main/stores/storeHooks';
import styles from './Weather.module.css'

export const Weather = observer(() => {
    const weather = useStore('weatherStore');
    useEffect(() => {
        weather.fetchManehatten();
        weather.fetchFillydelphia();
    }, [])
    return (
        <div className={styles.weatherWrapper}>
            <p className={styles.weatherText}>
                <h2>Weather in Cities of Wasteland:</h2>
                <div>
                    <span>Manehatten:</span>
                    <p>{weather.cities[0].weatherOne}, {weather.cities[0].weatherTwo}</p>
                </div>
                <div>
                    <span>Fillydelphia:</span>
                    <p>{weather.cities[1].weatherOne}, {weather.cities[1].weatherTwo}</p>
                </div>
            </p>
        </div>
    )
})