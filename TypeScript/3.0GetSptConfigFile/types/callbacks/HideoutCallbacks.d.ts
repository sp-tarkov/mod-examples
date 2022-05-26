import { HideoutController } from "../controllers/HideoutController";
import { OnUpdate } from "../di/OnUpdate";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IHideoutContinousProductionStartRequestData } from "../models/eft/hideout/IHideoutContinousProductionStartRequestData";
import { IHideoutPutItemInRequestData } from "../models/eft/hideout/IHideoutPutItemInRequestData";
import { IHideoutScavCaseStartRequestData } from "../models/eft/hideout/IHideoutScavCaseStartRequestData";
import { IHideoutSingleProductionStartRequestData } from "../models/eft/hideout/IHideoutSingleProductionStartRequestData";
import { IHideoutTakeItemOutRequestData } from "../models/eft/hideout/IHideoutTakeItemOutRequestData";
import { IHideoutTakeProductionRequestData } from "../models/eft/hideout/IHideoutTakeProductionRequestData";
import { IHideoutToggleAreaRequestData } from "../models/eft/hideout/IHideoutToggleAreaRequestData";
import { IHideoutUpgradeCompleteRequestData } from "../models/eft/hideout/IHideoutUpgradeCompleteRequestData";
import { IHideoutUpgradeRequestData } from "../models/eft/hideout/IHideoutUpgradeRequestData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { ConfigServer } from "../servers/ConfigServer";
export declare class HideoutCallbacks extends OnUpdate {
    private hideoutController;
    private configServer;
    private hideoutConfig;
    constructor(hideoutController: HideoutController, // TODO: delay needed
    configServer: ConfigServer);
    upgrade(pmcData: IPmcData, body: IHideoutUpgradeRequestData, sessionID: string): IItemEventRouterResponse;
    upgradeComplete(pmcData: IPmcData, body: IHideoutUpgradeCompleteRequestData, sessionID: string): IItemEventRouterResponse;
    putItemsInAreaSlots(pmcData: IPmcData, body: IHideoutPutItemInRequestData, sessionID: string): IItemEventRouterResponse;
    takeItemsFromAreaSlots(pmcData: IPmcData, body: IHideoutTakeItemOutRequestData, sessionID: string): IItemEventRouterResponse;
    toggleArea(pmcData: IPmcData, body: IHideoutToggleAreaRequestData, sessionID: string): IItemEventRouterResponse;
    singleProductionStart(pmcData: IPmcData, body: IHideoutSingleProductionStartRequestData, sessionID: string): IItemEventRouterResponse;
    scavCaseProductionStart(pmcData: IPmcData, body: IHideoutScavCaseStartRequestData, sessionID: string): IItemEventRouterResponse;
    continuousProductionStart(pmcData: IPmcData, body: IHideoutContinousProductionStartRequestData, sessionID: string): IItemEventRouterResponse;
    takeProduction(pmcData: IPmcData, body: IHideoutTakeProductionRequestData, sessionID: string): IItemEventRouterResponse;
    onUpdate(timeSinceLastRun: number): boolean;
    getRoute(): string;
}
