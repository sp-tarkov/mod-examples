import { HttpResponse } from "../utils/HttpResponse";
import { TraderController } from "../controllers/TraderController";
import { IEmptyRequestData } from "../@types/eft/common/IEmptyRequestData";
import { IBarterScheme, ITraderAssort, ITraderBase } from "../@types/eft/common/tables/ITrader";
import { IGetBodyResponseData } from "../@types/eft/httpResponse/IGetBodyResponseData";
import { OnLoadOnUpdate } from "../di/OnLoadOnUpdate";
export declare class TraderCallbacks extends OnLoadOnUpdate {
    private httpResponse;
    private traderController;
    constructor(httpResponse: HttpResponse, traderController: TraderController);
    onLoad(): void;
    getRoute(): string;
    getTraderSettings(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderBase[]>;
    getProfilePurchases(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<Record<string, IBarterScheme[][]>>;
    getTrader(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderBase>;
    getAssort(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderAssort>;
    onUpdate(): boolean;
}
