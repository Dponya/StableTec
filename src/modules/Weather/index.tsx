import React from 'react';
import { useWeather } from '../../library/common/hooks/requestHooks/useWeather';
import styles from './Weather.module.css'

export const Weather = () => {
    const [ManehattenWeatherMain, ManehattenWeatherDesc,
        PhiladelphiaWeatherMain, PhiladelphiaWeatherDesc] = useWeather();

    return (
        <div className={styles.weatherWrapper}>
            <p className={styles.weatherText}>
                <h2>Weather in Cities of Wasteland:</h2>
                <div>
                    <span>Manehatten:</span>
                    <p>{ManehattenWeatherMain}, {ManehattenWeatherDesc}</p>
                </div>
                <div>
                    <span>Fillydelphia:</span>
                    <p>{PhiladelphiaWeatherMain} {PhiladelphiaWeatherDesc}</p>
                </div>
            </p>
        </div>
    )
}