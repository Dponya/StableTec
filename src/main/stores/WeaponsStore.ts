import { action, makeObservable, observable } from 'mobx';
import { ICurrentItem } from '../../library/common/Typing/interfaces';
import { InventoryImages } from '../../library/utils/utils';

interface ICurrentActive {
    active: boolean
}

export class WeaponsStore {

    public currentItem: ICurrentItem = {
        img: InventoryImages[0]
    }

    public currentActive: Array<ICurrentActive> = [
        { active: false },
        { active: false },
        { active: false },
        { active: false },
    ]

    constructor() {
        makeObservable(this, {
            currentItem: observable,
            currentActive: observable,
            showItem: action
        })
    }

    showItem = (key: number): void => {
        this.currentItem.img = InventoryImages[key];
        this.currentActive.forEach(el => {
            el.active = false
        });
        this.currentActive[key].active = true;
    }
}