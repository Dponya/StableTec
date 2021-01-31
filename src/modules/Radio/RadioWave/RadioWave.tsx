import React, { useRef, useEffect, useState } from 'react';
import { useStore } from '../../../main/stores/storeHooks';
import WaveSurfer from 'wavesurfer.js'
import styles from '../Radio.module.scss';
import { observer } from 'mobx-react-lite';

export const RadioWave = observer(() => {
    let [waveSurfer, setWaveSurfer] = useState<any>(null);
    let [isPlaying, setIsPlaying] = useState(false);
    let [disabled, setDisable] = useState(false);
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
            setIsPlaying(false);
            waveSurfer.load(audio.auidoEx);
            waveSurfer.on('loading', function () {
                setDisable(true);
            });
            waveSurfer.on('ready', function () {
                setDisable(false);
            });
        }

        return () => {
            if (waveSurfer !== null) {
                waveSurfer.stop();
            }
        }
    }, [audio.auidoEx]);

    const togglePlayPause = () => {
        waveSurfer.playPause()
        setIsPlaying(!isPlaying)
    }
    return (
        <>
            <div className={styles.radioWaveGraph}>
                {audio.auidoEx === null ? <button className={styles.btn}>{audio.auidoEx !== null ? 'Music selected!' : 'Select music in left list!'}</button> : null}
                <div id="waveform" className={styles.canvas}></div>
                {disabled ? <button onClick={() => togglePlayPause()} className={styles.btn} disabled>Loading</button> : <button onClick={() => togglePlayPause()} className={styles.btn}>{isPlaying ? 'Stop!' : 'Play!'}</button>}
            </div>
        </>
    )
})