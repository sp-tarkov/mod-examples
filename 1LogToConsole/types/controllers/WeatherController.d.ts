import { ConfigServer } from "../servers/ConfigServer";
import { IWeatherConfig } from "../@types/spt/config/IWeatherConfig";
import { WeatherGenerator } from "../generators/WeatherGenerator";
import { IWeatherData } from "../@types/eft/weather/IWeatherData";
export declare class WeatherController {
    private weatherGenerator;
    private configServer;
    weatherConfig: IWeatherConfig;
    constructor(weatherGenerator: WeatherGenerator, configServer: ConfigServer);
    generate(): IWeatherData;
}
