import React from 'react'
import styles from './List.module.scss'
import { observer } from 'mobx-react-lite';
import { ISpecialList } from '../../../library/common/Typing/interfaces';

interface IListProps {
    setActive: (i: any) => void;
    specialList: ISpecialList[]
}

export const List = observer(({ setActive, specialList }: IListProps) => {

    const elems = specialList.map(i => <li key={i.id} onClick={() => setActive(i.id)} className={i.active ? styles.active : styles.nonactive}>{i.name}</li>)
    return (
        <div className={styles.listWrapper}>
            <ul className={styles.listText}>
                {elems}
            </ul>
        </div>
    )
})