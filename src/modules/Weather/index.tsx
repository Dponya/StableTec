import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../main/stores/storeHooks';
import styles from './Weather.module.scss'
import { FaCity, FaCloudRain, FaCloud, FaSun, FaSnowflake } from "react-icons/fa";
import { GiDeathcab } from 'react-icons/gi'
import { WiThermometer } from 'react-icons/wi'
import { RiDrizzleFill } from 'react-icons/ri'

export const Weather = observer(() => {
    const weather = useStore('weatherStore');

    useEffect(() => {
        weather.fetchManehatten();
        weather.fetchFillydelphia();
        weather.fetchCanterlot();
        weather.fetchBaltimare();
        weather.fetchHoofington();
        weather.fetchVanhoover();
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
                                {weather.cities[0].weatherOne === 'Clouds' ? <FaCloud className={styles.faCloud} /> : null}
                                {weather.cities[0].weatherOne === 'Rain' ? <FaCloudRain className={styles.faCloud} /> : null}
                                {weather.cities[0].weatherOne === 'Clear' ? <FaSun className={styles.faCloud} /> : null}
                                {weather.cities[0].weatherOne === 'Snow' ? <FaSnowflake className={styles.faCloud} /> : null}
                                {weather.cities[0].weatherOne === 'Drizzle' ? <RiDrizzleFill className={styles.faCloud} /> : null}
                                <p>{weather.cities[0].weatherOne}</p>
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
                                {weather.cities[1].weatherOne === 'Clouds' ? <FaCloud className={styles.faCloud} /> : null}
                                {weather.cities[1].weatherOne === 'Rain' ? <FaCloudRain className={styles.faCloud} /> : null}
                                {weather.cities[1].weatherOne === 'Clear' ? <FaSun className={styles.faCloud} /> : null}
                                {weather.cities[1].weatherOne === 'Snow' ? <FaSnowflake className={styles.faCloud} /> : null}
                                {weather.cities[1].weatherOne === 'Drizzle' ? <RiDrizzleFill className={styles.faCloud} /> : null}
                                <p>{weather.cities[1].weatherOne}</p>
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
                                {weather.cities[2].weatherOne === 'Rain' ? <FaCloudRain className={styles.faCloud} /> : <FaCloud className={styles.faCloud} />}
                                <p>Pink clouds</p>
                                <WiThermometer className={styles.faCloud} />
                                <p>{weather.cities[2].weatherTemp}K</p>
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
                                {weather.cities[3].weatherOne === 'Clouds' ? <FaCloud className={styles.faCloud} /> : null}
                                {weather.cities[3].weatherOne === 'Rain' ? <FaCloudRain className={styles.faCloud} /> : null}
                                {weather.cities[3].weatherOne === 'Clear' ? <FaSun className={styles.faCloud} /> : null}
                                {weather.cities[3].weatherOne === 'Snow' ? <FaSnowflake className={styles.faCloud} /> : null}
                                {weather.cities[3].weatherOne === 'Drizzle' ? <RiDrizzleFill className={styles.faCloud} /> : null}
                                <p>{weather.cities[3].weatherOne}</p>
                                <WiThermometer className={styles.faCloud} />
                                <p>{weather.cities[3].weatherTemp}K</p>
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
                                {weather.cities[4].weatherOne === 'Clouds' ? <FaCloud className={styles.faCloud} /> : null}
                                {weather.cities[4].weatherOne === 'Rain' ? <FaCloudRain className={styles.faCloud} /> : null}
                                {weather.cities[4].weatherOne === 'Clear' ? <FaSun className={styles.faCloud} /> : null}
                                {weather.cities[4].weatherOne === 'Snow' ? <FaSnowflake className={styles.faCloud} /> : null}
                                {weather.cities[4].weatherOne === 'Drizzle' ? <RiDrizzleFill className={styles.faCloud} /> : null}
                                <p>{weather.cities[4].weatherOne}</p>
                                <WiThermometer className={styles.faCloud} />
                                <p>{weather.cities[4].weatherTemp}K</p>
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
                                {weather.cities[5].weatherOne === 'Clouds' ? <FaCloud className={styles.faCloud} /> : null}
                                {weather.cities[5].weatherOne === 'Rain' ? <FaCloudRain className={styles.faCloud} /> : null}
                                {weather.cities[5].weatherOne === 'Clear' ? <FaSun className={styles.faCloud} /> : null}
                                {weather.cities[5].weatherOne === 'Snow' ? <FaSnowflake className={styles.faCloud} /> : null}
                                {weather.cities[5].weatherOne === 'Drizzle' ? <RiDrizzleFill className={styles.faCloud} /> : null}
                                <p>{weather.cities[5].weatherOne}</p>
                                <WiThermometer className={styles.faCloud} />
                                <p>{weather.cities[5].weatherTemp}K</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})