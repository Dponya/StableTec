import React from 'react';
import styles from './Weather.module.css'

export const Weather = () => {
    return (
        <div className={styles.weatherWrapper}>
            <p className={styles.weatherText}>
                soon Weather
            </p>
        </div>
    )
}