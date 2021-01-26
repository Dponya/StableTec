import { action, makeObservable, observable } from 'mobx';
import { IAudio } from '../../library/common/Typing/interfaces';
import { AudioTracks } from '../../library/utils/utils';

export class AudioStore {
    public auidoEx: string = '-';
    public playing: number = 0;

    public currentActive: Array<any> = [
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
        this.playing = this.playing + 1;
    }
}