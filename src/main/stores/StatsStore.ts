import { action, makeObservable, observable } from 'mobx';
import { uuid } from 'uuidv4';
import { ISpecial } from '../../library/common/types&interfaces/interfaces';

export class StatsStore {
    public specialList: ISpecial[] = [
        { id: uuid(), name: 'Strength:        4', active: false },
        { id: uuid(), name: 'Perception:      7', active: false },
        { id: uuid(), name: 'Endurance:       5', active: false },
        { id: uuid(), name: 'Charisma:        4', active: false },
        { id: uuid(), name: 'Intelligence:    8', active: false },
        { id: uuid(), name: 'Agillity:        7', active: false },
        { id: uuid(), name: 'Luck:            5', active: false },
    ]

    constructor() {
        makeObservable(this, {
            specialList: observable,
            setActive: action
        })
    }

    setActive = (i: any) => {
        const validate = (el: any) => {
            return el.id === i
        }
        this.specialList.find(validate)!.active = true;
        /* this.specialList[0].active = true; */
    }
}