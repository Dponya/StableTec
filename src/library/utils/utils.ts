import { Strength, Agillity, Charisma, Endurance, Perception, Science, Luck, PlazmaPistol, Axe, Horn, TNT } from '../../resources/imgImpors'
import { TODO_FIRST_TEXT, TODO_ADD_TODO, TODO_LIST } from './constants';
import { AlreadyOneYear, DareMaster } from '../../resources/mp3imports'

export enum Special {
    Strength = 0,
    Perception = 1,
    Endurance = 2,
    Charisma = 3,
    Science = 4,
    Agillity = 5,
    Luck = 6
}

export enum Inventory {
    PlazmaPistol = 0,
    TNT = 1,
    Axe = 2,
    Horn = 3,
}

export enum Audios {
    AlreadyOneYear = 0,
    DareMaster = 1
}

export const SpecialImages: Record<number, string> = {
    [Special.Strength]: Strength,
    [Special.Agillity]: Agillity,
    [Special.Charisma]: Charisma,
    [Special.Endurance]: Endurance,
    [Special.Perception]: Perception,
    [Special.Science]: Science,
    [Special.Luck]: Luck,
}

export const SpecialText = [
    0, 1, 2, 3, 4, 5, 6
]

export const InventoryImages: Record<number, string> = {
    [Inventory.PlazmaPistol]: PlazmaPistol,
    [Inventory.TNT]: TNT,
    [Inventory.Axe]: Axe,
    [Inventory.Horn]: Horn
}

export enum Commands {
    Todo = `todo`,
    AddTodo = 'addtodo',
    TodoList = 'todolist'
}

export const CommandsText: Record<string, string> = {
    [Commands.Todo]: TODO_FIRST_TEXT,
    [Commands.AddTodo]: TODO_ADD_TODO,
    [Commands.TodoList]: TODO_LIST,
}

export const AudioTracks: Record<number, string> = {
    [Audios.AlreadyOneYear]: AlreadyOneYear,
    [Audios.DareMaster]: DareMaster
}