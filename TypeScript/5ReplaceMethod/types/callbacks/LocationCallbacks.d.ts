import { LocationController } from "../controllers/LocationController";
import { IGetLocationRequestData } from "../models/eft/location/IGetLocationRequestData";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { ILocationsGenerateAllResponse } from "../models/eft/common/ILocationsSourceDestinationBase";
import { ILocationBase } from "../models/eft/common/ILocationBase";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class LocationCallbacks 
{
    private httpResponse;
    private locationController;
    constructor(httpResponse: HttpResponseUtil, locationController: LocationController);
    getLocationData(url: string, info: any, sessionID: string): IGetBodyResponseData<ILocationsGenerateAllResponse>;
    getLocation(url: string, info: IGetLocationRequestData, sessionID: string): IGetBodyResponseData<ILocationBase>;
}
