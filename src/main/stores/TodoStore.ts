import { action, makeObservable, observable } from 'mobx';
import { uuid } from 'uuidv4';
import { ITask } from '../../library/common/types&interfaces/interfaces';

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

    addTodo = (e: React.ChangeEvent<HTMLUnknownElement>, task: string): void => {
        e.preventDefault();
        this.tasks.push({ id: uuid(), task })
    }

    deleteTodo = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        e.preventDefault()
        this.tasks = this.tasks.filter(todo => todo.id !== id)
    }
}