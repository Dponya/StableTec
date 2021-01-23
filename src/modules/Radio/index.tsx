import React from 'react';
import styles from './Radio.module.scss'
import { AlreadyOneYear } from '../../resources/mp3imports';
import { RadioNavbar } from './RadioNavbar/RadioNavbar'

export const Radio = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <RadioNavbar />
            </div>
            <div className={styles.content}>

            </div>
        </div>
    )
}