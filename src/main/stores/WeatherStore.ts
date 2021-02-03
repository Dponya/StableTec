import { action, makeObservable, observable, runInAction } from 'mobx';
import { reqSeveralCities } from '../../library/common/api/WeatherAPIService';
import { CitiesId } from '../../library/utils/utils';

interface IWeather {
    name: string;
    weatherOne: string;
    weatherTemp: number;
}

export class WeatherStore {
    public cities: IWeather[] = [
        { name: 'Manehatten', weatherOne: '', weatherTemp: 0 },
        { name: 'Fillydelphia', weatherOne: '', weatherTemp: 0 },
        { name: 'Canterlot', weatherOne: '', weatherTemp: 0 },
        { name: 'Baltimare', weatherOne: '', weatherTemp: 0 },
        { name: 'Hoofington', weatherOne: '', weatherTemp: 0 },
        { name: 'Vanhoover', weatherOne: '', weatherTemp: 0 },
    ];

    constructor() {
        makeObservable(this, {
            cities: observable,
            fetchCitites: action,
        });
    }

    async fetchCitites() {
        try {
            const weather = [CitiesId[0], CitiesId[1], CitiesId[2], CitiesId[3], CitiesId[4], CitiesId[5]]
            const severalCitites = await reqSeveralCities(weather)
            runInAction(() => {
                this.cities.forEach((element, index) => {
                    element.weatherOne = severalCitites.data.list[index].weather[0].main;
                    element.weatherTemp = severalCitites.data.list[index].main.temp;
                })
            })
        }
        catch (Error) {
            console.log(Error.message)
        }
    }
}