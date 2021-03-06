import { action, makeObservable, observable } from 'mobx';
import { uuid } from 'uuidv4';
import { ICurrentImgTextId, ISpecialList } from '../../library/common/Typing/interfaces';
import { SpecialText, SpecialImages } from '../../library/utils/utils'

export class StatsStore {
    public specialList: ISpecialList[] = [
        { id: uuid(), name: 'Strength:', lvl: '4', active: true },
        { id: uuid(), name: 'Perception:', lvl: '7', active: false },
        { id: uuid(), name: 'Endurance:', lvl: '5', active: false },
        { id: uuid(), name: 'Charisma:', lvl: '4', active: false },
        { id: uuid(), name: 'Intelligence:', lvl: '8', active: false },
        { id: uuid(), name: 'Agillity:', lvl: '7', active: false },
        { id: uuid(), name: 'Luck:', lvl: '5', active: false },
    ]

    public currentImgTexId: ICurrentImgTextId = {
        img: SpecialImages[0],
        textId: SpecialText[0],
    }

    constructor() {
        makeObservable(this, {
            specialList: observable,
            currentImgTexId: observable,
            setActive: action
        })
    }

    mountImageText = (value: number): void => {
        this.currentImgTexId.img = SpecialImages[value];
        this.currentImgTexId.textId = SpecialText[value];
    }

    setActive = (id: string): void => {
        this.specialList.forEach(el => {
            el.active = false
        })

        const validate = (el: { id: string }) => {
            return el.id === id
        }
        this.specialList.find(validate)!.active ? this.specialList.find(validate)!.active = false :
            this.specialList.find(validate)!.active = true;

        let activeSpecialIndex = this.specialList.map(e => {
            return e.active
        }).indexOf(true);

        this.mountImageText(activeSpecialIndex);
    }
}