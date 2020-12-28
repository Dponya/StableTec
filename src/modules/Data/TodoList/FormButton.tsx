import React, { useState } from 'react'
import { ITodo } from '../../../library/common/types&interfaces/interfaces'

interface IFormButtonProps {
    addTodo: (e: any, task: any) => void;
}

export const FormButton: React.FC<IFormButtonProps> = ({ addTodo }) => {

    const [newTask, setTask] = useState<any>('');

    return (
        <div>
            <form onSubmit={(e) => addTodo(e, newTask)}>
                <label htmlFor="todo">Todo text</label>
                <br />
                <input
                    id="todo"
                    className="todo-input"
                    onChange={(event) => setTask(event.target.value)}
                    value={newTask}
                />
                <button type="submit" className="add-btn">
                    Add
                </button>
            </form>
        </div>
    )
}