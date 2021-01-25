import React, { useRef } from 'react';
import { useStore } from '../../../main/stores/storeHooks';
import styles from '../Radio.module.scss';
import { AudioTracks } from '../../../library/utils/utils';

export const RadioWave = () => {
    const waveDiv = useRef<any>(null);

    const checkClick = () => {
        let context, analyser: any, src, array;
        const audio = new Audio(AudioTracks[0])
        audio.play()
        /// preparation
        context = new AudioContext();
        analyser = context.createAnalyser();
        src = context.createMediaElementSource(audio);
        src.connect(analyser);
        analyser.connect(context.destination);
        /// loop
        function loop() {
            window.requestAnimationFrame(loop);
            array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);

            waveDiv.current.style.height = (array[40]) + "px";
            waveDiv.current.style.width = (array[40]) + "px";
        }
        loop();
    }

    const preparation = () => {
    }

    return (
        <div className={styles.radioWaveGraph}>
            <div className={styles.wave}>
            </div>
            <div ref={waveDiv} style={{ backgroundColor: "red", width: "100%", height: "3px" }} onClick={checkClick}></div>
        </div>
    )
}