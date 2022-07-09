import { WeatherController } from "../controllers/WeatherController";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class WeatherCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected weatherController: WeatherController;
    constructor(httpResponse: HttpResponseUtil, weatherController: WeatherController);
    getWeather(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
}
