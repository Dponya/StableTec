import { action, makeObservable, observable } from 'mobx';
import { ICurrentItem } from '../../library/common/Typing/interfaces';
import { InventoryImages } from '../../library/utils/utils';

export class WeaponsStore {

    public currentItem: ICurrentItem = {
        img: InventoryImages[0]
    }

    constructor() {
        makeObservable(this, {
            currentItem: observable,
            showItem: action
        })
    }

    showItem = (key: number) => {
        this.currentItem.img = InventoryImages[key];
        console.log(key);
    }
}