import React from 'react';
import { List } from './List/List'
import { Content } from './Content/Content'
import { observer } from 'mobx-react-lite';
import styles from './Special.module.scss'
import { useStore } from '../../../main/stores/storeHooks';

export const Special = observer(() => {
    let stats = useStore('statsStore');
    return (
        <div className={styles.specialWrapper}>
            <List setActive={stats.setActive} specialList={stats.specialList} />
            <Content currentImgTextId={stats.currentImgTexId} />
        </div>
    )
})