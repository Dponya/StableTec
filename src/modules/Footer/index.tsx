import React from 'react';
import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <p className={styles.footerTextAndOrder}>
                <span>HP 115/115 </span>
                <span>Level 24 </span>
                <span>AP 90/90 </span>
            </p>
        </div>
    )
}