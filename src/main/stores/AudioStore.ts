import { action, makeObservable, observable } from 'mobx';
import { IAudio } from '../../library/common/Typing/interfaces';
import { AudioTracks } from '../../library/utils/utils';

interface ICurrentActive {
    active: boolean
}

export class AudioStore {
    public auidoEx: string | null = null;

    public currentActive: Array<ICurrentActive> = [
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
    ]

    constructor() {
        makeObservable(this, {
            auidoEx: observable,
            currentActive: observable,
            filterAudio: action,
        })
    }

    filterAudio = (audio: number) => {
        const selectedAudio = AudioTracks[audio]
        this.auidoEx = selectedAudio;

        this.currentActive.forEach(el => {
            el.active = false
        });
        this.currentActive[audio].active = true;
    }
}