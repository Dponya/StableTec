import React, { useRef, useEffect, useState } from 'react';
import { useStore } from '../../../main/stores/storeHooks';
import WaveSurfer from 'wavesurfer.js'
import styles from '../Radio.module.scss';
import { observer } from 'mobx-react-lite';


export const RadioWave = observer(() => {
    let [waveSurfer, setWaveSurfer] = useState<any>(null);
    let [isPlaying, setIsPlaying] = useState(false);
    const audio = useStore('audioStore');

    useEffect(() => {
        setWaveSurfer(WaveSurfer.create({
            container: '#waveform',
            waveColor: '#1fc063',
            barWidth: 6,
            barHeight: 2,
            progressColor: '#1fc63',
            cursorColor: '#00000',
            cursorWidth: 0.1,
            hideScrollbar: true
        }))
    }, [])

    useEffect(() => {
        if (waveSurfer) {
            waveSurfer.load(audio.auidoEx);
        }
    }, [audio.auidoEx])

    const togglePlayPause = () => {
        waveSurfer.playPause()
        setIsPlaying(!isPlaying)
    }
    return (
        <>
            <div className={styles.radioWaveGraph}>
                <div id="waveform" className={styles.canvas}></div>
            </div>
            <button onClick={() => togglePlayPause()}>{isPlaying ? '||' : '+'}</button>
        </>
    )
})