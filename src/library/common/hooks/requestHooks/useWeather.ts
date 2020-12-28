import { useState, useEffect } from 'react'
import { weatherGet } from '../../api/WeatherAPIService'

export const useWeather = () => {
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
    }, [PhiladelphiaWeatherDesc]);

    return [ManehattenWeatherMain, ManehattenWeatherDesc, PhiladelphiaWeatherMain, PhiladelphiaWeatherDesc]
}