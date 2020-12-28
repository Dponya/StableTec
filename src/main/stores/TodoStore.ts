import { makeAutoObservable } from 'mobx';
import { uuid } from 'uuidv4';

export class TodoStore {
    public tasks: any[] = [
        { id: uuid(), task: 'type your tasks, boy!' },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    get getAllTasks() {
        return this.tasks;
    }

    addTodo = (e: any, task: any): void => {
        e.preventDefault();
        this.tasks.push({ id: uuid(), task })
    }

    deleteTodo = (e: any, id: number) => {
        e.preventDefault()
        this.tasks = this.tasks.filter(todo => todo.id !== id)
    }
}