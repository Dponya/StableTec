import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useStore } from '../../main/stores/storeHooks';
import styles from './Weather.module.scss'
import { SpecialImages } from '../../library/utils/utils';
import { FaCity, FaCloudRain, FaTemperatureLow } from "react-icons/fa";
import { GiDeathcab } from 'react-icons/gi'
import { WiThermometer } from 'react-icons/wi'

export const Weather = observer(() => {
    const weather = useStore('weatherStore');

    useEffect(() => {
        weather.fetchManehatten();
        weather.fetchFillydelphia();
    }, [weather]);

    return (
        <div className={styles.weatherWrapper}>
            <div className={styles.container}>
                <div className={styles.blockContainer}>
                    <div className={styles.content}>
                        <div className={styles.contentInformation}>
                            <FaCity />
                            <p>Manehattan</p>
                        </div>
                        <div className={styles.contentWeather}>
                            <p> Weather in City:</p>
                            <div className={styles.contentPrecipitation}>
                                <FaCloudRain className={styles.faCloud} />
                                <p>Rain</p>
                                <WiThermometer className={styles.faCloud} />
                                <p>{weather.cities[0].weatherTemp}K</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.blockContainer}>
                    <div className={styles.content}>
                        <div className={styles.contentInformation}>
                            <FaCity />
                            <p>Fillydelphia</p>
                        </div>
                        <div className={styles.contentWeather}>
                            <p> Weather in City:</p>
                            <div className={styles.contentPrecipitation}>
                                <FaCloudRain className={styles.faCloud} />
                                <p>Rain</p>
                                <WiThermometer className={styles.faCloud} />
                                <p>{weather.cities[1].weatherTemp}K</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.blockContainer}>
                    <div className={styles.content}>
                        <div className={styles.contentInformation}>
                            <GiDeathcab />
                            <p>Canterlot</p>
                        </div>
                        <div className={styles.contentWeather}>
                            <p> Weather in City:</p>
                            <div className={styles.contentPrecipitation}>
                                <FaCloudRain className={styles.faCloud} />
                                <p>Rain</p>
                                <WiThermometer className={styles.faCloud} />
                                <p>+243K</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.blockContainer}>
                    <div className={styles.content}>
                        <div className={styles.contentInformation}>
                            <FaCity />
                            <p>Baltimare</p>
                        </div>
                        <div className={styles.contentWeather}>
                            <p> Weather in City:</p>
                            <div className={styles.contentPrecipitation}>
                                <FaCloudRain className={styles.faCloud} />
                                <p>Rain</p>
                                <WiThermometer className={styles.faCloud} />
                                <p>{weather.cities[1].weatherTemp}K</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.blockContainer}>
                    <div className={styles.content}>
                        <div className={styles.contentInformation}>
                            <FaCity />
                            <p>Hoofington</p>
                        </div>
                        <div className={styles.contentWeather}>
                            <p> Weather in City:</p>
                            <div className={styles.contentPrecipitation}>
                                <FaCloudRain className={styles.faCloud} />
                                <p>Rain</p>
                                <WiThermometer className={styles.faCloud} />
                                <p>{weather.cities[1].weatherTemp}K</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.blockContainer}>
                    <div className={styles.content}>
                        <div className={styles.contentInformation}>
                            <FaCity />
                            <p>Vanhoover</p>
                        </div>
                        <div className={styles.contentWeather}>
                            <p> Weather in City:</p>
                            <div className={styles.contentPrecipitation}>
                                <FaCloudRain className={styles.faCloud} />
                                <p>Rain</p>
                                <WiThermometer className={styles.faCloud} />
                                <p>{weather.cities[1].weatherTemp}K</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})