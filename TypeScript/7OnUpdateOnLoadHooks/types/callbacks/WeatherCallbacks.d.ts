import { WeatherController } from "../controllers/WeatherController";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class WeatherCallbacks {
    private httpResponse;
    private weatherController;
    constructor(httpResponse: HttpResponseUtil, weatherController: WeatherController);
    getWeather(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
}
