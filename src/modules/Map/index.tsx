import React from 'react';
import styles from './Map.module.scss'
import { FactoryWorldMap } from '../../resources/imgImpors'

export const Map = () => {
    return (
        <div className={styles.mapWrapper}>
            <p className={styles.mapText}>
                Map soon
            </p>
            <img src={FactoryWorldMap} alt={'map'} />
            <map name="image-map" onClick={() => console.log('lala')}>
                <area target="" alt="Canterlot" title="Canterlot" href="" coords="87,58,133,110" shape="rect" onClick={() => console.log('lala')} />
            </map>
        </div>
    )
}