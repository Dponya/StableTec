import React from 'react';
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerOrder}>
                <NavLink to={'/stats'} className={styles.headerText} activeClassName={styles.activeHeader}>
                    <span>Stats </span>
                </NavLink>

                <NavLink to={'/inv'} className={styles.headerText} activeClassName={styles.activeHeader}>
                    <span>Inventory</span>
                </NavLink >

                <NavLink to={'/data'} className={styles.headerText} activeClassName={styles.activeHeader}>
                    <span>Data </span>
                </NavLink>

                <NavLink to={'/radio'} className={styles.headerText} activeClassName={styles.activeHeader}>
                    <span>Radio </span>
                </NavLink>

                <NavLink to={'/weather'} className={styles.headerText} activeClassName={styles.activeHeader}>
                    <span>Wasteland's Weather</span>
                </NavLink>
            </div>
        </div>
    )
}