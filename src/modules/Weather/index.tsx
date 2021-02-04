import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../main/stores/storeHooks';
import { WeatherDashboard } from './WeatherDashboard';

export const Weather = observer(() => {
    const weather = useStore('weatherStore');

    useEffect(() => {
        weather.fetchCitites();
    }, [weather]);

    return (
        <div>
            <WeatherDashboard cities={weather.cities} />
        </div>
    )
})