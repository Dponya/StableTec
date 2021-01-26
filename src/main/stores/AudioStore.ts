import { action, makeObservable, observable } from 'mobx';
import { IAudio } from '../../library/common/Typing/interfaces';
import { AudioTracks } from '../../library/utils/utils';

export class AudioStore {
    public auidoEx: string | null = '-';

    constructor() {
        makeObservable(this, {
            auidoEx: observable,
            filterAudio: action,
        })
    }

    filterAudio = (audio: number) => {
        const selectedAudio = AudioTracks[audio]
        this.auidoEx = selectedAudio;
        console.log(this.auidoEx);
    }
}