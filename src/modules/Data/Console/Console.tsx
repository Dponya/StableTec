import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { ITask } from '../../../library/common/Typing/interfaces';
import { useStore } from '../../../main/stores/storeHooks';
import styles from './Console.module.scss';

type Inputs = {
    example: string,
};

export const Console: React.FC = () => {
    const todo = useStore('todoStore');
    /*     const { register, handleSubmit } = useForm<Inputs>();
        const onSubmit = (data: SubmitHandler<Record<string, any>>) => addTodo(data)
    
        const taskList = tasks.map((task: ITask) => <li key={task.id} >{task.filteredTask}</li>); */

    return (
        <div className={styles.dataWrapper}>
            <div className={styles.terminalcontainer}>
                <div><p className={styles.error}>ERROR...</p></div>
                <div> <p className={`${styles.output} ${styles.typing}`}>!(@*##@!#)!!@#*@!(#!*@(#!@*(#*!@(#*!(@)# <br />
                Welcome! Its StableTec Corp. Terminal. Thanks for using StableTec! <br /> All rights reserved (c) @StableTec</p></div>
            </div>
            <div className={styles.console}>
                <div className={`${styles.commandInput} `}><br />
                    <div ><span className={styles.line}>root@STABLETEC</span></div>
                    <div><span className={styles.line}>/:</span>&nbsp;
                    <input className={`${styles.command}`} />
                    </div>
                </div>

            </div>
        </div>
    )
}