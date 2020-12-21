import React from 'react';
import styles from './Weather.module.css'

type WeatherProps = {
    manehattenDataMain: Object,
    manehattenDataDesc: Object,
    philadelphiaDataMain: Object,
    philadelphiaWeatherDesc: Object
}

export const Weather: React.FC<WeatherProps> = React.memo(({ manehattenDataMain, manehattenDataDesc,
    philadelphiaDataMain, philadelphiaWeatherDesc }) => {

    return (
        <div className={styles.weatherWrapper}>
            <p className={styles.weatherText}>
                <h2>Weather in Cities of Wasteland:</h2>
                <div>
                    <span>Manehatten:</span>
                    <p>{manehattenDataMain}, {manehattenDataDesc}</p>
                </div>
                <div>
                    <span>Fillydelphia:</span>
                    <p>{philadelphiaDataMain} {philadelphiaWeatherDesc}</p>
                </div>
            </p>
        </div>
    )
})