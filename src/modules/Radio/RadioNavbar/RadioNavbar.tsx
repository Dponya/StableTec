import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Radio.module.scss';

export const RadioNavbar = () => {
    return (
        <NavLink to={'/radio/radio'} className={styles.navbarText}>
            <span>Radio</span>
        </NavLink>
    )
}