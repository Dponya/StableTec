import { action, makeObservable, observable } from 'mobx';
import { uuid } from 'uuidv4';
import { ITask } from '../../library/common/Typing/interfaces';
import { SubmitHandler } from 'react-hook-form';

export class TodoStore {
    public tasks: ITask[] = [
        { id: uuid(), filteredTask: 'type your tasks boy' },
    ];

    constructor() {
        makeObservable(this, {
            tasks: observable,
            addTodo: action,
            deleteTodo: action
        });
    }

    get getAllTasks() {
        return this.tasks;
    }

    addTodo = (task: any): void => {
        let filteredTask = task.example;
        this.tasks.push({ id: uuid(), filteredTask })
    }

    deleteTodo = (id: number) => {
        this.tasks = this.tasks.filter(todo => todo.id !== id)
    }
}