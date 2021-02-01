import { action, makeObservable, observable } from 'mobx';
import { AudioTracks } from '../../library/utils/utils';

interface ICurrentActive {
    active: boolean
}

export class AudioStore {
    public auidoEx: string | null = AudioTracks[0];

    public currentActive: Array<ICurrentActive> = [
        { active: true },
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