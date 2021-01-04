import { action, makeObservable, observable } from 'mobx';
import { uuid } from 'uuidv4';
import { ITask } from '../../library/common/Typing/interfaces';

export class TodoStore {
    public tasks: ITask[] = [
        { id: uuid(), task: 'type your tasks, boy!' },
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

    addTodo = (task: string): void => {
        this.tasks.push({ id: uuid(), task })
    }

    deleteTodo = (id: number) => {
        this.tasks = this.tasks.filter(todo => todo.id !== id)
    }
}