import { action, makeObservable, observable } from 'mobx';
import { IAudio } from '../../library/common/Typing/interfaces';
import { AudioTracks } from '../../library/utils/utils';

export class AudioStore {
    public auidoEx: null | IAudio = null;

    constructor() {
        makeObservable(this, {
            auidoEx: observable,
            filterAudio: action,
            playThisAudio: action,
        })
    }

    filterAudio = (audio: number) => {

        const selectedAudio = AudioTracks[audio]
        this.playThisAudio(selectedAudio);
    }

    playThisAudio = (audio: string) => {
        if (this.auidoEx === null) {
            this.auidoEx = new Audio(audio);
            this.auidoEx.play();
        }
        else {
            this.auidoEx.pause();
            this.auidoEx = null;
        }
    }


}