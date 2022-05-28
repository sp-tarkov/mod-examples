import { WeatherGenerator } from "../generators/WeatherGenerator";
import { IWeatherData } from "../models/eft/weather/IWeatherData";
import { ConfigServer } from "../servers/ConfigServer";
export declare class WeatherController {
    private weatherGenerator;
    private configServer;
    private weatherConfig;
    constructor(weatherGenerator: WeatherGenerator, configServer: ConfigServer);
    generate(): IWeatherData;
}
