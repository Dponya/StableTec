import { action, makeObservable, observable } from 'mobx';
import { uuid } from 'uuidv4';
import { ITask } from '../../library/common/Typing/interfaces';
import { Commands, CommandsText } from '../../library/utils/utils';
import { TODO_FIRST_TEXT } from '../../library/utils/constants';

export class TodoStore {
    public tasks: ITask[] = [
        { id: uuid(), filteredTask: 'type your tasks boy' },
    ];
    public showTask: boolean = false;
    public commandState: string = '';

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

    consoleFilter = (command: any) => {
        const commandText = command.command;
        console.log(commandText.split('')[1]);

        switch (commandText) {
            case Commands.Todo:
                this.commandState = '';
                this.commandState = CommandsText.todo;
                break;
            case Commands.AddTodo:
                this.tasks.push({ id: uuid(), filteredTask: 'example' })

                let tasksList = this.tasks.map((task) => {
                    return task.filteredTask;
                })
                this.commandState = '';
                this.commandState = `${CommandsText.addtodo}: ${tasksList}`;
                break;
            default:
                console.log('Type "commands" for show list of commands');
                break;
        }
    }
}