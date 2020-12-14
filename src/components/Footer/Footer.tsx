import React from 'react';
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerText}>
                <span>HP 115/115 </span>
                <span>Level 24 </span>
                <span>AP 90/90 </span>
            </div>
        </div>
    )
}