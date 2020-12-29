import { action, makeObservable, observable, runInAction } from 'mobx';
import { weatherGet } from '../../library/common/api/WeatherAPIService';

interface IWeather {
    name: string;
    weatherOne: any;
    weatherTwo: any;
}

export class WeatherStore {
    public cities: IWeather[] = [
        { name: 'Manehatten', weatherOne: '', weatherTwo: '' },
        { name: 'Fillydelphia', weatherOne: '', weatherTwo: '' }
    ];

    constructor() {
        makeObservable(this, {
            cities: observable,
            fetchManehatten: action,
            fetchFillydelphia: action
        });
    }

    async fetchManehatten() {
        try {
            const manehattenCity = await weatherGet(`London`);
            runInAction(() => {
                this.cities[0].weatherOne = manehattenCity.data.weather[0].main;
                this.cities[0].weatherTwo = manehattenCity.data.weather[0].description;
            })
        }
        catch (e: any) {
            console.log(e);
        }
    }

    async fetchFillydelphia() {
        try {
            const fillydelphiaCity = await weatherGet(`Philadelphia`);
            runInAction(() => {
                this.cities[1].weatherOne = fillydelphiaCity.data.weather[0].main;
                this.cities[1].weatherTwo = fillydelphiaCity.data.weather[0].description;
            })
        }
        catch (e: any) {
            console.log(e);
        }
    }


}