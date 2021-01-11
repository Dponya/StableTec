import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { ITask } from '../../../../library/common/Typing/interfaces';
import styles from '../TodoList.module.scss';

interface IFormButtonProps {
    tasks: Array<ITask>;
    addTodo: (task: React.FormEventHandler) => void;
}

type Inputs = {
    example: string,
};

export const FormButton: React.FC<IFormButtonProps> = ({ tasks, addTodo }) => {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit = (data: SubmitHandler<Record<string, any>>) => addTodo(data)

    const taskList = tasks.map((task: ITask) => <li key={task.id} >{task.filteredTask}</li>);

    return (
        <div>
            <dialog id="dialog" className={styles.crt}>
                <div id="content"></div>
            </dialog>
            <dialog open><p className={styles.error}>ERROR...</p></dialog>
            <textarea className={`${styles.output} `} id="demo">{taskList}</textarea>
            <div className={styles.console} id="console">
                <div className={`${styles.commandInput} `}><br />
                    <div ><span className={styles.line}>root@SAM </span></div>
                    <div><span className={styles.line}>$</span>&nbsp;
                    <input className={`${styles.command}`} />
                    </div>
                </div>

            </div>

        </div>
    )
}