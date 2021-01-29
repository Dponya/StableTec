import { action, makeObservable, observable, runInAction } from 'mobx';
import { weatherGet } from '../../library/common/api/WeatherAPIService';

interface IWeather {
    name: string;
    weatherOne: any;
    weatherTemp: number;
}

export class WeatherStore {
    public cities: IWeather[] = [
        { name: 'Manehatten', weatherOne: '', weatherTemp: 0 },
        { name: 'Fillydelphia', weatherOne: '', weatherTemp: 0 }
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
                console.log(manehattenCity.data)
                this.cities[0].weatherOne = manehattenCity.data.weather[0].main;
                this.cities[0].weatherTemp = manehattenCity.data.main.temp;
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
                this.cities[1].weatherTemp = fillydelphiaCity.data.main.temp;
            })
        }
        catch (e: any) {
            console.log(e);
        }
    }


}