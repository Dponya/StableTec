import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { useStore } from '../../../main/stores/storeHooks';
import styles from './Console.module.scss';

type Inputs = {
    example: string,
};

export const Console: React.FC = () => {
    const todo = useStore('todoStore');
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit = (data: SubmitHandler<Record<string, any>>) => todo.consoleFilter(data)

    return (
        <div className={styles.dataWrapper}>
            <div className={styles.errorContent}>
                <p className={styles.error}>ERROR...</p>
            </div>
            <div className={styles.typeContent}>
                <p className={styles.typing}>!(@*##@!#)!!@#*@!(#!*@(#!@*(#*!@(#*!(@)# <br />
                 Welcome! Its StableTec Corp. Terminal. Thanks for using StableTec! <br /> All rights reserved (c) @StableTec</p>
            </div>
            <div>
                <p className={styles.typeContent}>{todo.commandState}</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.terminalInput}>
                    <div><span className={styles.line}>root@STABLETEC</span></div>
                    <div><span className={styles.line}>&gt;</span>&nbsp;
                             <input className={`${styles.command}`} name="command" ref={register} autoComplete="off" />
                    </div>
                </form>
            </div>
        </div>
    )
}