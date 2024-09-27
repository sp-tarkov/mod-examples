import { WeatherGenerator } from "@spt/generators/WeatherGenerator";
import { IWeatherData } from "@spt/models/eft/weather/IWeatherData";
import { IWeatherConfig } from "@spt/models/spt/config/IWeatherConfig";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { IGetLocalWeatherResponseData } from "@spt/models/spt/weather/IGetLocalWeatherResponseData";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { SeasonalEventService } from "@spt/services/SeasonalEventService";
export declare class WeatherController {
    protected weatherGenerator: WeatherGenerator;
    protected logger: ILogger;
    protected configServer: ConfigServer;
    protected seasonalEventService: SeasonalEventService;
    protected weatherConfig: IWeatherConfig;
    constructor(weatherGenerator: WeatherGenerator, logger: ILogger, configServer: ConfigServer, seasonalEventService: SeasonalEventService);
    /** Handle client/weather */
    generate(): IWeatherData;
    /**
     * Get the current in-raid time (MUST HAVE PLAYER LOGGED INTO CLIENT TO WORK)
     * @returns Date object
     */
    getCurrentInRaidTime(): Date;
    generateLocal(sesssionID: string): IGetLocalWeatherResponseData;
}
