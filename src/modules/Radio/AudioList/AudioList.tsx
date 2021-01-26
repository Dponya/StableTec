import React from 'react';
import { useStore } from '../../../main/stores/storeHooks';
import styles from '../Radio.module.scss';
import { Audios } from '../../../library/utils/utils';
import { observer } from 'mobx-react-lite';

export const AudioList = observer(() => {
    const audio = useStore('audioStore');

    return (
        <div className={styles.list}>
            <ul>
                <li className={`${styles.radioText} ${audio.currentActive[0].active ? styles.active : styles.nonactive}`} onClick={() => audio.filterAudio(Audios.AlreadyOneYear)}>Already One Year -  (jazzy cover for the Fallout: Equestria radio play adaptation, featuring EileMonty)</li>
                <li className={`${styles.radioText}  ${audio.currentActive[1].active ? styles.active : styles.nonactive}`} onClick={() => audio.filterAudio(Audios.DareMaster)}>Dare Master - (The Wasteland Wailers)</li>
                <li className={`${styles.radioText}  ${audio.currentActive[2].active ? styles.active : styles.nonactive}`} onClick={() => audio.filterAudio(Audios.BlueMoon)}>Blue Moon (Fallout: Equestria) - SkyBolt - (Frank Sinatra, Ponified)</li>
                <li className={`${styles.radioText}  ${audio.currentActive[3].active ? styles.active : styles.nonactive}`} onClick={() => audio.filterAudio(Audios.OneLastDance)}>One Last Dance ( ͡° ͜ʖ ͡°) - The Balefire Symphony</li>
                <li className={`${styles.radioText}  ${audio.currentActive[4].active ? styles.active : styles.nonactive}`} onClick={() => audio.filterAudio(Audios.BigIron)}>Big Iron (Fallout: Equestria) - SkyBolt - (Marty Robbins, Ponified)</li>
            </ul>
        </div>
    )
})