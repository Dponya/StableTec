import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useStore } from '../../main/stores/storeHooks';
import styles from './Weather.module.scss'
import { SpecialImages } from '../../library/utils/utils';
import { FaCity, FaCloudRain, FaTemperatureLow } from "react-icons/fa";

export const Weather = observer(() => {
    const weather = useStore('weatherStore');

    useEffect(() => {
        weather.fetchManehatten();
        weather.fetchFillydelphia();
    }, [weather]);

    const images = [SpecialImages[0], SpecialImages[1], SpecialImages[2], SpecialImages[3], SpecialImages[4]];


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
                            <p> Weather in City now:</p>
                            <FaCloudRain className={styles.faCloud} />
                        </div>
                    </div>
                </div>
                {/* <div className={styles.blockContainer}>
                    <div className={styles.content}>
                        <FaCity />
                        <p>Fillydelphia</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
})