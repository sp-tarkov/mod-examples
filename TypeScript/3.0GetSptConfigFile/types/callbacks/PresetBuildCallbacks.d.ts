import { PresetBuildController } from "../controllers/PresetBuildController";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IPresetBuildActionRequestData } from "../@types/eft/presetBuild/IPresetBuildActionRequestData";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { IGetBodyResponseData } from "../@types/eft/httpResponse/IGetBodyResponseData";
import { WeaponBuild } from "../@types/eft/profile/IAkiProfile";
import { HttpResponse } from "../utils/HttpResponse";
export declare class PresetBuildCallbacks {
    private httpResponse;
    private presetBuildController;
    constructor(httpResponse: HttpResponse, presetBuildController: PresetBuildController);
    getHandbookUserlist(url: string, info: any, sessionID: string): IGetBodyResponseData<WeaponBuild[]>;
    saveBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
    removeBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
}
