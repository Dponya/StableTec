import React from 'react'
import styles from './List.module.scss'
import { observer } from 'mobx-react-lite';
import { ISpecial } from '../../../library/common/types&interfaces/interfaces';

interface IListProps {
    setActive: (i: any) => void;
    specialList: ISpecial[]
}

export const List = observer(({ setActive, specialList }: IListProps) => {
    console.log(specialList[0].active)


    const elems = specialList.map(i => <li key={i.id} onClick={() => setActive(i.id)} className={i.active ? styles.active : styles.nonactive}>{i.name}</li>)
    return (
        <div className={styles.listWrapper}>
            <ul className={styles.listText}>
                {elems}
            </ul>
        </div>
    )
})