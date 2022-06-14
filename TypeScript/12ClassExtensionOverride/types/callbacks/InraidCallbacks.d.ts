import { InraidController } from "../controllers/InraidController";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { INullResponseData } from "../models/eft/httpResponse/INullResponseData";
import { IRegisterPlayerRequestData } from "../models/eft/inRaid/IRegisterPlayerRequestData";
import { ISaveProgressRequestData } from "../models/eft/inRaid/ISaveProgressRequestData";
import { IAirdropConfig } from "../models/spt/config/IAirdropConfig";
import { IInRaidConfig } from "../models/spt/config/IInRaidConfig";
import { ConfigServer } from "../servers/ConfigServer";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class InraidCallbacks {
    protected inraidController: InraidController;
    protected httpResponse: HttpResponseUtil;
    protected configServer: ConfigServer;
    protected airdropConfig: IAirdropConfig;
    protected inraidConfig: IInRaidConfig;
    constructor(inraidController: InraidController, httpResponse: HttpResponseUtil, configServer: ConfigServer);
    registerPlayer(url: string, info: IRegisterPlayerRequestData, sessionID: string): INullResponseData;
    saveProgress(url: string, info: ISaveProgressRequestData, sessionID: string): INullResponseData;
    getRaidEndState(): string;
    getRaidMenuSettings(url: string, info: IEmptyRequestData, sessionID: string): string;
    getWeaponDurability(url: string, info: any, sessionID: string): string;
    getAirdropConfig(url: string, info: any, sessionID: string): string;
}
