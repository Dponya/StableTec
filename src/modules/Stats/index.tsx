import React from 'react';
import { StatsRoute } from '../../main/routes/nBarRoutes';
import styles from './Stats.module.scss'
import { StatsNavbar } from './StatsNavbar/StatsNavbar';

export const Stats: React.FC = () => {
    return (
        <div className={styles.statsWrapper}>
            <div className={styles.navbar}>
                <StatsNavbar />
            </div>
            <div>
                <StatsRoute />
            </div>
        </div>
    )
}