import React, { useState } from 'react'

interface IFormButtonProps {
    addTodo: (e: React.ChangeEvent<HTMLInputElement>, task: string) => void;
}

export const FormButton: React.FC<IFormButtonProps> = ({ addTodo }) => {

    const [newTask, setTask] = useState<any>('');

    return (
        <div>
            <form onSubmit={(e: any) => addTodo(e, newTask)}>
                <label htmlFor="todo">Todo text</label>
                <br />
                <input
                    id="todo"
                    className="todo-input"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTask(event.target.value)}
                    value={newTask}
                />
                <button type="submit" className="add-btn">
                    Add
                </button>
            </form>
        </div>
    )
}