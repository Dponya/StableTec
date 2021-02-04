import React from 'react';
import { FaCity } from "react-icons/fa";
import { WiThermometer } from 'react-icons/wi'
import styles from './Weather.module.scss';
import { observer } from 'mobx-react-lite';
import { WeatherIcon } from '../../library/common/components/WeatherIcon';

interface IWeatherDashboardProps {
    cities: Array<{ name: string, weatherOne: string, weatherTemp: number }>
}

export const WeatherDashboard: React.FC<IWeatherDashboardProps> = observer(({ cities }) => {

    const weatherBlocks = cities.map((weather: { name: string, weatherOne: string, weatherTemp: number }) => {
        return (
            <div className={styles.container}>
                <div className={styles.blockContainer}>
                    <div className={styles.content}>
                        <div className={styles.contentInformation}>
                            <FaCity />
                            <p>{weather.name}</p>
                        </div>
                        <div className={styles.contentWeather}>
                            <p> Weather in City:</p>
                            <div className={styles.contentPrecipitation}>
                                <WeatherIcon weatherOne={weather.weatherOne} styles={styles.faIcon} />
                                <p>{weather.weatherOne}</p>
                                <WiThermometer className={styles.faIcon} />
                                <p>{weather.weatherTemp}K</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={styles.centralizer}>
            <div className={styles.weatherWrapper}>
                {weatherBlocks}
            </div >
        </div>
    )
})