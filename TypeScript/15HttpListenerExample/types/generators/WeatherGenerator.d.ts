import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper";
import { IWeatherData } from "../models/eft/weather/IWeatherData";
import { IWeatherConfig } from "../models/spt/config/IWeatherConfig";
import { ConfigServer } from "../servers/ConfigServer";
import { RandomUtil } from "../utils/RandomUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class WeatherGenerator {
    protected weightedRandomHelper: WeightedRandomHelper;
    protected randomUtil: RandomUtil;
    protected timeUtil: TimeUtil;
    protected configServer: ConfigServer;
    protected weatherConfig: IWeatherConfig;
    constructor(weightedRandomHelper: WeightedRandomHelper, randomUtil: RandomUtil, timeUtil: TimeUtil, configServer: ConfigServer);
    calculateTime(data: IWeatherData): IWeatherData;
    /**
     * Get server uptime seconds multiplied by a multiplier and add to current time as seconds
     * Format to BSGs requirements
     * @param computedDate current date
     * @returns formatted time
     */
    protected getAcceleratedTime(computedDate: Date): string;
    /**
     * Get current time formatted to fit BSGs requirement
     * @param computedDate date to format into bsg style
     * @returns
     */
    protected getNormalTime(computedDate: Date): string;
    /**
     * Return randomised Weather data
     * @param weatherData weather input data
     * @returns Randomised weather data
     */
    generateWeather(weatherData: IWeatherData): IWeatherData;
    protected getWeightedFog(): string;
    protected getWeightedRain(): number;
    protected getRandomFloat(node: string): number;
    protected getRandomInt(node: string): number;
}
