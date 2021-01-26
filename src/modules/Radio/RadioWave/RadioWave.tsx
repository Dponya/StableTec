import React, { useRef, useEffect, useState } from 'react';
import { useStore } from '../../../main/stores/storeHooks';
import WaveSurfer from 'wavesurfer.js'
import styles from '../Radio.module.scss';
import { AudioTracks } from '../../../library/utils/utils';


export const RadioWave = () => {
    let [waveSurfer, setWaveSurfer] = useState<any>(null);
    let [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setWaveSurfer(WaveSurfer.create({
            container: '#waveform'
        }))
    }, [])

    useEffect(() => {
        if (waveSurfer) {
            waveSurfer.load(AudioTracks[0])
        }
    }, [waveSurfer])

    const togglePlayPause = () => {
        waveSurfer.playPause()
        setIsPlaying(!isPlaying)
    }

    return (
        <>
            <div className={styles.radioWaveGraph}>
            </div>
            <div id="waveform" ></div>
            <button onClick={() => togglePlayPause()}>{isPlaying ? '||' : '+'}</button>
        </>

    )
}