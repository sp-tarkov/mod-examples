import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { IItemEventRouterRequest } from "../models/eft/itemEvent/IItemEventRouterRequest";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class ItemEventCallbacks {
    private httpResponse;
    private itemEventRouter;
    constructor(httpResponse: HttpResponseUtil, itemEventRouter: ItemEventRouter);
    handleEvents(url: string, info: IItemEventRouterRequest, sessionID: string): IGetBodyResponseData<IItemEventRouterResponse>;
}
