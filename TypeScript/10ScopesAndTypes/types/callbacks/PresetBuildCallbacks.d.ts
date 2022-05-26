import { PresetBuildController } from "../controllers/PresetBuildController";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IPresetBuildActionRequestData } from "../models/eft/presetBuild/IPresetBuildActionRequestData";
import { WeaponBuild } from "../models/eft/profile/IAkiProfile";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class PresetBuildCallbacks {
    private httpResponse;
    private presetBuildController;
    constructor(httpResponse: HttpResponseUtil, presetBuildController: PresetBuildController);
    getHandbookUserlist(url: string, info: any, sessionID: string): IGetBodyResponseData<WeaponBuild[]>;
    saveBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
    removeBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
}
