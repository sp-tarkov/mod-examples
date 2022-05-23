import { JsonUtil } from "./JsonUtil";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { INullResponseData } from "../models/eft/httpResponse/INullResponseData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
export declare class HttpResponseUtil {
    private jsonUtil;
    constructor(jsonUtil: JsonUtil);
    private clearString;
    noBody(data: any): any;
    getBody<T>(data: T, err?: number, errmsg?: any): IGetBodyResponseData<T>;
    getUnclearedBody(data: any, err?: number, errmsg?: any): string;
    emptyResponse(): IGetBodyResponseData<string>;
    nullResponse(): INullResponseData;
    emptyArrayResponse(): IGetBodyResponseData<any[]>;
    appendErrorToOutput(output: IItemEventRouterResponse, message?: string, title?: string): IItemEventRouterResponse;
}
