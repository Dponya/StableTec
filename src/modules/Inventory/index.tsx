import React from 'react';
import { InvRoute } from '../../main/routes/nBarRoutes';
import styles from './Inventory.module.scss'
import { InvNavbar } from './InvNavbar/InvNavbar';

export const Inventory = () => {
    return (
        <div className={styles.inventoryWrapper}>
            <div className={styles.navbar}>
                <InvNavbar />
            </div>
            <div>
                <InvRoute />
            </div>
        </div>
    )
}