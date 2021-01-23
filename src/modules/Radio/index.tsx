import React from 'react';
import styles from './Radio.module.scss'
import { AlreadyOneYear } from '../../resources/mp3imports';
import { RadioNavbar } from './RadioNavbar/RadioNavbar'
import { RadioRoute } from '../../main/routes/nBarRoutes';

export const Radio = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <RadioNavbar />
            </div>
            <div className={styles.content}>
                <RadioRoute />
            </div>
        </div>
    )
}