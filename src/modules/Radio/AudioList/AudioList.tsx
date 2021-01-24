import React from 'react';
import styles from '../Radio.module.scss';

export const AudioList = () => {
    return (
        <div className={styles.list}>
            <ul>
                <li className={styles.radioText}>Already One Year -  (jazzy cover for the Fallout: Equestria radio play adaptation, featuring EileMonty)</li>
                <li className={styles.radioText}>Dare Master - (The Wasteland Wailers)</li>
                <li className={styles.radioText}>Blue Moon (Fallout: Equestria) - SkyBolt - (Frank Sinatra, Ponified)</li>
                <li className={styles.radioText}>One Last Dance ( ͡° ͜ʖ ͡°) - The Balefire Symphony</li>
                <li className={styles.radioText}>Big Iron (Fallout: Equestria) - SkyBolt - (Marty Robbins, Ponified)</li>
            </ul>
        </div>
    )
}