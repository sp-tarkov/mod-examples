import { ItemHelper } from "../helpers/ItemHelper";
import { SaveServer } from "../servers/SaveServer";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IPresetBuildActionRequestData } from "../models/eft/presetBuild/IPresetBuildActionRequestData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { WeaponBuild } from "../models/eft/profile/IAkiProfile";
import { HashUtil } from "../utils/HashUtil";
import { ItemEventRouter } from "../routers/ItemEventRouter";
export declare class PresetBuildController {
    private hashUtil;
    private itemEventRouter;
    private itemHelper;
    private saveServer;
    constructor(hashUtil: HashUtil, itemEventRouter: ItemEventRouter, itemHelper: ItemHelper, saveServer: SaveServer);
    getUserBuilds(sessionID: string): WeaponBuild[];
    saveBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
    removeBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
}
