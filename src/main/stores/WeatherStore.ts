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
        { name: 'Fillydelphia', weatherOne: '', weatherTemp: 0 },
        { name: 'Canterlot', weatherOne: '', weatherTemp: 0 },
        { name: 'Baltimare', weatherOne: '', weatherTemp: 0 },
        { name: 'Hoofington', weatherOne: '', weatherTemp: 0 },
        { name: 'Vanhoover', weatherOne: '', weatherTemp: 0 },
    ];

    constructor() {
        makeObservable(this, {
            cities: observable,
            fetchManehatten: action,
            fetchFillydelphia: action,
            fetchCanterlot: action,
            fetchBaltimare: action,
            fetchHoofington: action,
            fetchVanhoover: action
        });
    }

    async fetchManehatten() {
        try {
            const manehattenCity = await weatherGet(`London`);
            runInAction(() => {
                console.log(manehattenCity.data)
                this.cities[0].weatherOne = manehattenCity.data.weather[0].main;
                this.cities[0].weatherTemp = manehattenCity.data.main.temp;
                console.log(this.cities[0].weatherOne)
                console.log(this.cities[0].weatherOne === 'Rain')
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

    async fetchCanterlot() {
        try {
            const canterlotCity = await weatherGet(`Cameroon`);
            runInAction(() => {
                this.cities[2].weatherOne = canterlotCity.data.weather[0].main;
                this.cities[2].weatherTemp = canterlotCity.data.main.temp;
            })
        }
        catch (e: any) {
            console.log(e);
        }
    }

    async fetchBaltimare() {
        try {
            const canterlotCity = await weatherGet(`Baltimore`);
            runInAction(() => {
                this.cities[3].weatherOne = canterlotCity.data.weather[0].main;
                this.cities[3].weatherTemp = canterlotCity.data.main.temp;
            })
        }
        catch (e: any) {
            console.log(e);
        }
    }

    async fetchHoofington() {
        try {
            const canterlotCity = await weatherGet(`Detroit`);
            runInAction(() => {
                this.cities[4].weatherOne = canterlotCity.data.weather[0].main;
                this.cities[4].weatherTemp = canterlotCity.data.main.temp;
            })
        }
        catch (e: any) {
            console.log(e);
        }
    }

    async fetchVanhoover() {
        try {
            const canterlotCity = await weatherGet(`Vancouver`);
            runInAction(() => {
                this.cities[5].weatherOne = canterlotCity.data.weather[0].main;
                this.cities[5].weatherTemp = canterlotCity.data.main.temp;
            })
        }
        catch (e: any) {
            console.log(e);
        }
    }


}