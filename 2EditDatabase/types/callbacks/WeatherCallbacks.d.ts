import { WeatherController } from "../controllers/WeatherController";
import { IGetBodyResponseData } from "../@types/eft/httpResponse/IGetBodyResponseData";
import { IEmptyRequestData } from "../@types/eft/common/IEmptyRequestData";
import { HttpResponse } from "../utils/HttpResponse";
export declare class WeatherCallbacks {
    private httpResponse;
    private weatherController;
    constructor(httpResponse: HttpResponse, weatherController: WeatherController);
    getWeather(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
}
