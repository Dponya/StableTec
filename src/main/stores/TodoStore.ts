import { makeAutoObservable } from 'mobx';

interface ITodo {
    tasks: string[]
}

export class TodoStore {
    tasks: ITodo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    get getAllTasks() {
        return this.tasks;
    }

    addTodo(task: ITodo) {
        this.tasks.push(task);
    }
}