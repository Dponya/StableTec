import React from 'react';
import { List } from './List/List'
import { Content } from './Content/Content'
import styles from './Stats.module.scss'
import { useStore } from '../../main/stores/storeHooks';

export const Stats = () => {
    let stats = useStore('statsStore');
    return (
        <div className={styles.statsWrapper}>
            <List />
            <Content />
        </div>
    )
}