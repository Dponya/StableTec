import React from 'react';
import styles from './Data.module.scss'
import { QuestNavbar } from './QuestNavbar/QuestNavbar';
import { QuestRoute } from '../../main/routes/nBarRoutes';


export const Data: React.FC = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <QuestNavbar />
            </div>
            <div className={styles.content}>
                <QuestRoute />
            </div>
        </div>
    )
}