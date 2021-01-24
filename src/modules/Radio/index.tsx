import React from 'react';
import styles from './Radio.module.scss';
import { AudioList } from './AudioList/AudioList';
import { RadioWave } from './RadioWave/RadioWave';

export const Radio = () => {
    return (
        <div className={styles.radioWrapper}>
            <div className={styles.content}>
                <AudioList />
            </div>
            <div className={styles.graph}>
                <RadioWave />
            </div>
        </div>
    )
}