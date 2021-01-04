import { action, makeObservable, observable } from 'mobx';
import { uuid } from 'uuidv4';
import { ICurrentImg, ISpecialList, ISpecialTextImage } from '../../library/common/Typing/interfaces';
import { SpecialListIndex } from '../../library/common/Typing/enums';
import { Strength, Agillity, Charisma, Endurance, Perception, Science, Luck } from '../../resources/imgImpors';

export class StatsStore {
    public specialList: ISpecialList[] = [
        { id: uuid(), name: 'Strength:        4', active: true },
        { id: uuid(), name: 'Perception:      7', active: false },
        { id: uuid(), name: 'Endurance:       5', active: false },
        { id: uuid(), name: 'Charisma:        4', active: false },
        { id: uuid(), name: 'Intelligence:    8', active: false },
        { id: uuid(), name: 'Agillity:        7', active: false },
        { id: uuid(), name: 'Luck:            5', active: false },
    ]
    specialTextImage: ISpecialTextImage[] = [
        {
            img: Strength, text: `Strength is a measure of your raw physical poweror magical power
        (If youre a Horny).It affects how much you can carry and the damage if all melee attacks` },
        { img: Perception, text: 'Perception' },
        { img: Endurance, text: 'Endurance dopustim' },
        { img: Charisma, text: 'Charisma' },
        { img: Science, text: 'Intelligence' },
        { img: Agillity, text: 'Agillity' },
        { img: Luck, text: 'Luck' },
    ]

    public currentImgText: ICurrentImg[] = [
        { img: Strength, text: `Strength is a measure of your raw physical power or magical power(If youre a Horny).It affects how much you can carry and the damage if all melee attacks` }
    ]

    constructor() {
        makeObservable(this, {
            specialList: observable,
            specialTextImage: observable,
            currentImgText: observable,
            setActive: action
        })
    }

    mountImageText = (value: number): void => {

        switch (value) {
            case SpecialListIndex.Strength:
                this.currentImgText[0].img = this.specialTextImage[0].img
                break;
            case SpecialListIndex.Perception:
                this.currentImgText[0].img = Perception;
                break;
            case SpecialListIndex.Endurance:
                this.currentImgText[0].img = Endurance;
                break;
            case SpecialListIndex.Charisma:
                this.currentImgText[0].img = Charisma;
                break;
            case SpecialListIndex.Science:
                this.currentImgText[0].img = Science;
                break;
            case SpecialListIndex.Agillity:
                this.currentImgText[0].img = Agillity;
                break;
            case SpecialListIndex.Luck:
                this.currentImgText[0].img = Luck;
                break;
            default:
                this.currentImgText[0].img = Strength;
        }
    }

    setActive = (i: any) => {
        this.specialList.forEach(el => {
            el.active = false
        })

        const validate = (el: any) => {
            return el.id === i
        }
        this.specialList.find(validate)!.active ? this.specialList.find(validate)!.active = false :
            this.specialList.find(validate)!.active = true;

        let activeSpecialIndex = this.specialList.map(e => {
            return e.active
        }).indexOf(true);

        this.mountImageText(activeSpecialIndex);
    }
}