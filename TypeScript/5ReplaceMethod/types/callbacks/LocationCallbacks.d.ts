import { LocationController } from "../controllers/LocationController";
import { IGetLocationRequestData } from "../@types/eft/location/IGetLocationRequestData";
import { IGetBodyResponseData } from "../@types/eft/httpResponse/IGetBodyResponseData";
import { ILocationsGenerateAllResponse } from "../@types/eft/common/ILocationsSourceDestinationBase";
import { ILocationBase } from "../@types/eft/common/ILocationBase";
import { HttpResponse } from "../utils/HttpResponse";
export declare class LocationCallbacks {
    private httpResponse;
    private locationController;
    constructor(httpResponse: HttpResponse, locationController: LocationController);
    getLocationData(url: string, info: any, sessionID: string): IGetBodyResponseData<ILocationsGenerateAllResponse>;
    getLocation(url: string, info: IGetLocationRequestData, sessionID: string): IGetBodyResponseData<ILocationBase>;
}
