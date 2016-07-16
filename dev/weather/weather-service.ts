import {Injectable} from "angular2/core";
import {WEATHER_ITEMS} from "./weather.data";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {WeatherItem} from "./weather-item";
@Injectable()

export class WeatherService{


    constructor(private _http:Http){
    }

    addWeatherItem(weatherItem:WeatherItem){
            WEATHER_ITEMS.push(weatherItem);
            
    }

    getWeatherItems(){
        return WEATHER_ITEMS;
    }


    searchWeatherData(cityName: string): Observable<any>{

        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID=2646e7d63bac97a1a36c5311ee690b77&units=metric')
        
                .map(response=>response.json())
                .catch(error=>{
                    console.error(error);
                    return Observable.throw(error.json())
                });
    }
}