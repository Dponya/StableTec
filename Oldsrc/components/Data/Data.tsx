import React from 'react';
import styles from './Data.module.css'
import { Main } from './Todo/Main';

export const Data = () => {
    return (
        <div className={styles.dataWrapper}>
            <p className={styles.dataText}>
                <Main />
            </p>
        </div>
    )
}