import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Data.module.scss';

export const QuestNavbar = () => {
    return (
        <NavLink to={'/data/quest'} className={styles.navbarText}>
            <span>Quest</span>
        </NavLink>
    )
}