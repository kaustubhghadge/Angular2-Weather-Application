import {Component} from 'angular2/core';
import {WeatherListComponent} from './weather/weather-list.component';
import {WeatherSearchComponent} from './weather/weather-search.component';
@Component({
    selector: 'my-app',
    template: `
    <div id="container">
        <div id="header">
            <h1>Weather App</h1>
            <h3>Using Angular2 and OpenWeatherMap API</h3>
        </div>
        <div>
        
        </div>
        <div id="body">
            <my-weather-search></my-weather-search>
            <weather-list></weather-list>
        </div>
        <div id="footer">
            <p>&copy; Kaustubh Ghadge</p>
        </div>
    </div>

    `,
    directives:[WeatherListComponent, WeatherSearchComponent]
})
export class AppComponent {

}