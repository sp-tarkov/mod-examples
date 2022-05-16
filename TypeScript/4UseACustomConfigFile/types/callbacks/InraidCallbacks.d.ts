import { InraidController } from "../controllers/InraidController";
import { INullResponseData } from "../@types/eft/httpResponse/INullResponseData";
import { IEmptyRequestData } from "../@types/eft/common/IEmptyRequestData";
import { IRegisterPlayerRequestData } from "../@types/eft/inRaid/IRegisterPlayerRequestData";
import { ISaveProgressRequestData } from "../@types/eft/inRaid/ISaveProgressRequestData";
import { ConfigServer } from "../servers/ConfigServer";
import { HttpResponse } from "../utils/HttpResponse";
export declare class InraidCallbacks {
    private inraidController;
    private httpResponse;
    private configServer;
    private airdropConfig;
    private inraidConfig;
    constructor(inraidController: InraidController, httpResponse: HttpResponse, configServer: ConfigServer);
    registerPlayer(url: string, info: IRegisterPlayerRequestData, sessionID: string): INullResponseData;
    saveProgress(url: string, info: ISaveProgressRequestData, sessionID: string): INullResponseData;
    getRaidEndState(): string;
    getRaidMenuSettings(url: string, info: IEmptyRequestData, sessionID: string): string;
    getWeaponDurability(url: string, info: any, sessionID: string): string;
    getAirdropConfig(url: string, info: any, sessionID: string): string;
}
