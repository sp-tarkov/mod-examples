export interface IWeatherData {
    acceleration: number;
    time: string;
    date: string;
    weather: IWeather;
}
export interface IWeather {
    pressure: number;
    temp: number;
    fog: string;
    rain_intensity: number;
    rain: any;
    wind_gustiness: number;
    wind_direction: any;
    wind_speed: number;
    cloud: number;
    time: string;
    date: string;
    timestamp: number;
}
