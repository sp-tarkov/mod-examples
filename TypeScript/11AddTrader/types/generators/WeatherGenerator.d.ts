import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper";
import { ConfigServer } from "../servers/ConfigServer";
import { IWeatherData } from "../models/eft/weather/IWeatherData";
import { RandomUtil } from "../utils/RandomUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class WeatherGenerator {
    private weightedRandomHelper;
    private randomUtil;
    private timeUtil;
    private configServer;
    private weatherConfig;
    constructor(weightedRandomHelper: WeightedRandomHelper, randomUtil: RandomUtil, timeUtil: TimeUtil, configServer: ConfigServer);
    calculateTime(data: IWeatherData): IWeatherData;
    generateWeather(data: IWeatherData): IWeatherData;
    private getWeightedFog;
    private getWeightedRain;
    private getRandomFloat;
    private getRandomInt;
}
