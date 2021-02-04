import axios from 'axios';

export const weatherGet = (city: string) => {
    const apiKey = `1e9e0e7bed05e6845970125e4fd28fbb`
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
}

export const reqSeveralCities = (cities: Array<string>) => {
    const apiKey = `1e9e0e7bed05e6845970125e4fd28fbb`;
    const ids = cities;
    return axios.get(`https://api.openweathermap.org/data/2.5/group?id=${ids}&appid=${apiKey} `)
}