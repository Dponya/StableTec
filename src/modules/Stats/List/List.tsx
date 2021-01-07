import React from 'react'
import styles from './List.module.scss'
import { observer } from 'mobx-react-lite';
import { ISpecialList } from '../../../library/common/Typing/interfaces';

interface IListProps {
    setActive: (i: any) => void;
    specialList: ISpecialList[]
}

export const List = observer(({ setActive, specialList }: IListProps) => {

    const SpecialElems = specialList.map(el => {
        return (
            <div className={`${styles.tableRow} ${el.active ? styles.active : styles.nonactive} `} onClick={() => setActive(el.id)}>
                <div className={styles.listText}>{el.name}</div>
                <div className={styles.listText}>{el.lvl}</div>
            </div>
        )
    })

    return (
        <div className={styles.listWrapper}>
            {SpecialElems}
        </div>
    )
})