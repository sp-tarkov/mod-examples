import { IGetBodyResponseData } from "../@types/eft/httpResponse/IGetBodyResponseData";
import { IItemEventRouterRequest } from "../@types/eft/itemEvent/IItemEventRouterRequest";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { HttpResponse } from "../utils/HttpResponse";
export declare class ItemEventCallbacks {
    private httpResponse;
    private itemEventRouter;
    constructor(httpResponse: HttpResponse, itemEventRouter: ItemEventRouter);
    handleEvents(url: string, info: IItemEventRouterRequest, sessionID: string): IGetBodyResponseData<IItemEventRouterResponse>;
}
