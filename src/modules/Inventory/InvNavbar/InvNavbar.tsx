import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Inventory.module.scss';

export const InvNavbar = () => {
    return (
        <NavLink to={'/inv/weapons'} className={styles.navbarText}>
            <span>Weapons</span>
        </NavLink>
    )
}