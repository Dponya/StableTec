import { action, makeObservable, observable } from 'mobx';

export class StatsStore {
    classes = [
        'active', 'nonactive'
    ]
    constructor() {
        makeObservable(this, {
            classes: observable,
            setActive: action
        })
    }

    setActive = () => {
        return this.classes[0]
    }
}