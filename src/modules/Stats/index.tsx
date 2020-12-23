import React from 'react';
import { List } from './List/List'
import { Content } from './Content/Content'
import styles from './Stats.module.css'

export const Stats = () => {
    return (
        <div className={styles.statsWrapper}>
            <List />
            <Content />
        </div>
    )
}