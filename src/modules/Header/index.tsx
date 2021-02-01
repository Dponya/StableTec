import React from 'react';
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerOrder}>
                <NavLink to={'/stats'} className={styles.headerText}>
                    <span>Stats </span>
                </NavLink>

                <NavLink to={'/inv'} className={styles.headerText}>
                    <span>Inventory</span>
                </NavLink >

                <NavLink to={'/data'} className={styles.headerText}>
                    <span>Data </span>
                </NavLink>

                <NavLink to={'/radio'} className={styles.headerText}>
                    <span>Radio </span>
                </NavLink>

                <NavLink to={'/weather'} className={styles.headerText}>
                    <span>Wasteland's Weather</span>
                </NavLink>
            </div>
        </div>
    )
}