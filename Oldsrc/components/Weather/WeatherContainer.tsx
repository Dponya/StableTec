import React, { useEffect, useState } from 'react';
import { Weather } from './Weather'
import { weatherGet } from '../../api/WeatherAPIService'

export const WeatherContainer: React.FC = React.memo(() => {

    const [ManehattenWeatherMain, SetManehattenWeatherMain] = useState('')
    const [ManehattenWeatherDesc, SetManehattenWeatherDesc] = useState('')

    const [PhiladelphiaWeatherMain, SetPhiladelphiaWeatherMain] = useState('')
    const [PhiladelphiaWeatherDesc, SetPhiladelphiaWeatherDesc] = useState('')

    useEffect(() => {
        weatherGet(`London`).then(response => {
            SetManehattenWeatherMain(response.data.weather[0].main);
            console.log(response.data);
        })
    }, [ManehattenWeatherMain])

    useEffect(() => {
        weatherGet(`London`).then(response => {
            SetManehattenWeatherDesc(response.data.weather[0].description)
        })
    }, [ManehattenWeatherDesc])

    useEffect(() => {
        weatherGet(`Philadelphia`).then(response => {
            SetPhiladelphiaWeatherMain(response.data.weather[0].main);
            console.log(response.data);
        })
    }, [PhiladelphiaWeatherMain])

    useEffect(() => {
        weatherGet(`Philadelphia`).then(response => {
            SetPhiladelphiaWeatherDesc(response.data.weather[0].description)
        })
    }, [PhiladelphiaWeatherDesc])

    return (
        <Weather manehattenDataMain={ManehattenWeatherMain} manehattenDataDesc={ManehattenWeatherDesc}
            philadelphiaDataMain={PhiladelphiaWeatherMain} philadelphiaWeatherDesc={PhiladelphiaWeatherDesc} />
    )
})