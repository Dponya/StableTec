import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Stats.module.scss'

export const StatsNavbar = () => {
    return (
        <NavLink to={'/stats/special'} className={styles.navbarText}>
            <span>Special</span>
        </NavLink>
    )
}