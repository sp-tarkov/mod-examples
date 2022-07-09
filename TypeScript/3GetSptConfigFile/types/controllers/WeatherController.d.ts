import { WeatherGenerator } from "../generators/WeatherGenerator";
import { IWeatherData } from "../models/eft/weather/IWeatherData";
import { IWeatherConfig } from "../models/spt/config/IWeatherConfig";
import { ConfigServer } from "../servers/ConfigServer";
export declare class WeatherController {
    protected weatherGenerator: WeatherGenerator;
    protected configServer: ConfigServer;
    protected weatherConfig: IWeatherConfig;
    constructor(weatherGenerator: WeatherGenerator, configServer: ConfigServer);
    generate(): IWeatherData;
}
