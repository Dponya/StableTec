import React from 'react';
import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerBlock}><span className={styles.footerTextAndOrder}>HP 115/115 </span></div>
            <div className={styles.footerBlock}><span className={styles.footerTextAndOrder}>Level 24</span><div className={styles.lvlblock}></div></div>
            <div className={styles.footerBlock}><span className={styles.footerTextAndOrder}>AP 90/90</span></div>
        </div>
    )
}