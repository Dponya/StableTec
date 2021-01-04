import { action, makeObservable, observable } from 'mobx';
import { uuid } from 'uuidv4';
import { ICurrentImg, ISpecialList } from '../../library/common/Typing/interfaces';
import { SpecialIndex } from '../../library/utils/utils';
import { SpecialImages, SpecialText } from '../../library/utils/utils'

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

    public currentImgText: ICurrentImg[] = [
        { img: SpecialImages.STRENGTH, text: SpecialText.STRENGTH_TEXT }
    ]

    constructor() {
        makeObservable(this, {
            specialList: observable,
            currentImgText: observable,
            setActive: action
        })
    }

    mountImageText = (value: number): void => {

        switch (value) {
            case SpecialIndex.Strength:
                this.currentImgText[0].img = SpecialImages.STRENGTH;
                break;
            case SpecialIndex.Perception:
                this.currentImgText[0].img = SpecialImages.PERCEPTION;
                break;
            case SpecialIndex.Endurance:
                this.currentImgText[0].img = SpecialImages.ENDURANCE;
                break;
            case SpecialIndex.Charisma:
                this.currentImgText[0].img = SpecialImages.CHARISMA;
                break;
            case SpecialIndex.Science:
                this.currentImgText[0].img = SpecialImages.SCIENCE;
                break;
            case SpecialIndex.Agillity:
                this.currentImgText[0].img = SpecialImages.AGILLITY;
                break;
            case SpecialIndex.Luck:
                this.currentImgText[0].img = SpecialImages.LUCK;
                break;
            default:
                this.currentImgText[0].img = SpecialImages.STRENGTH;
        }
    }

    setActive = (i: string) => {
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