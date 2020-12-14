import React from 'react';
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <span>Stats </span>

            <span>Inv </span>

            <span>Data </span>

            <span>Map </span>

            <span>Radio </span>
        </div>
    )
}