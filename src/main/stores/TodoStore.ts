import { makeObservable, observable } from 'mobx';
import { uuid } from 'uuidv4';
import { ITask } from '../../library/common/Typing/interfaces';
import { Commands, CommandsText } from '../../library/utils/utils';

export class TodoStore {
    public tasks: ITask[] = [
        { id: uuid(), filteredTask: 'fixTrouble' },
    ];
    public showTask: boolean = false;
    public commandState: string = '';

    constructor() {
        makeObservable(this, {
            tasks: observable,
        });
    }

    consoleFilter = (command: { command: string }) => {
        console.log(command);
        const notFilteredText = command.command;
        const splitedCommandText = notFilteredText.split(' ')[0]
        const splitedValueText = notFilteredText.split(' ')[1]
        let tasksList = this.tasks.map((task) => {
            return task.filteredTask;
        })

        switch (splitedCommandText) {
            case Commands.Todo:

                this.commandState = '';
                this.commandState = CommandsText.todo;
                break;
            case Commands.TodoList:

                this.commandState = '';
                this.commandState = `${CommandsText.todolist}: ${tasksList}`
                break;
            case Commands.AddTodo:
                this.tasks.push({ id: uuid(), filteredTask: splitedValueText })

                this.commandState = '';
                this.commandState = `${CommandsText.addtodo}: ${tasksList}`;
                break;
            default:
                this.commandState = '';
                this.commandState = `Error. Invalid command. ${CommandsText.todo}.`
                break;
        }
    }
}