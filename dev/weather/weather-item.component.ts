import {Component, Input    } from 'angular2/core';
import{WeatherItem} from './weather-item';


@Component({

    selector:'weather-item',
    template: `
    <article class="weather-element"> 
            <div class="col-1">
           	    <h3>{{weatherItem.cityName}}</h3>
                <p class="info">{{weatherItem.description}}</p>
            </div>
            <div class="col-2">
                <span class="temperature">{{weatherItem.temperature}}°C</span>
            </div>
    </article>
    `,
    styleUrls:['src/css/weather-item.css'],
    //inputs: ['weatherItem: item'] // property binding method 1 
})


export class WeatherItemComponent {
   @Input('item') weatherItem: WeatherItem; // using @Input() - property binding method 2

/*   constructor(){
            this. weatherItem= new WeatherItem('London', 'Rainy', 32);
    }
*/
}