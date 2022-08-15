import { TraderController } from "../controllers/TraderController";
import { OnLoadOnUpdate } from "../di/OnLoadOnUpdate";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { IBarterScheme, ITraderAssort, ITraderBase } from "../models/eft/common/tables/ITrader";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class TraderCallbacks extends OnLoadOnUpdate {
    protected httpResponse: HttpResponseUtil;
    protected traderController: TraderController;
    constructor(httpResponse: HttpResponseUtil, traderController: TraderController);
    onLoad(): void;
    onUpdate(): boolean;
    getRoute(): string;
    getTraderSettings(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderBase[]>;
    getProfilePurchases(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<Record<string, IBarterScheme[][]>>;
    getTrader(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderBase>;
    getAssort(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderAssort>;
}
