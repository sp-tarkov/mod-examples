import { IBaseConfig } from "./IBaseConfig";
export interface IWeatherConfig extends IBaseConfig {
    kind: "aki-weather";
    acceleration: number;
    weather: Weather;
}
export interface Weather {
    clouds: MinMax;
    windSpeed: MinMax;
    windDirection: MinMax;
    windGustiness: MinMax;
    rain: MinMax;
    rainIntensity: MinMax;
    fog: MinMax;
    temp: MinMax;
    pressure: MinMax;
}
export interface MinMax {
    min: number;
    max: number;
}
