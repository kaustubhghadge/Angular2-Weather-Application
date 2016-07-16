import {Component} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {WeatherService} from "./weather-service";
import{WeatherItem} from "./weather-item";

   @Component({
            
        selector: "my-weather-search",
        template: ` <selection class="weather-search">
                        <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                            <label for="city">City</label>
                            <input ngControl="location" type="text" id="city" required>
                            <button type="submit">Add City</button>
                        </form>
                    </selection>
        
        `
    })


export class WeatherSearchComponent{

    constructor(private _weatherService: WeatherService){

    }

    onSubmit(form:ControlGroup){
        
        console.log(form);

        this._weatherService.searchWeatherData(form.value.location)
            .subscribe(

                data =>{
                            const weatherItem= new WeatherItem(data.name,data.weather[0].description, data.main.temp);
                            this._weatherService.addWeatherItem(weatherItem);
                }
            );

           



    }
 
}