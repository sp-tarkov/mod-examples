import { HttpResponse } from "../utils/HttpResponse";
import { SaveServer } from "../servers/SaveServer";
import { LauncherController } from "../controllers/LauncherController";
import { IRegisterData } from "../@types/eft/launcher/IRegisterData";
import { IRemoveProfileData } from "../@types/eft/launcher/IRemoveProfileData";
import { ILoginRequestData } from "../@types/eft/launcher/ILoginRequestData";
import { IChangeRequestData } from "../@types/eft/launcher/IChangeRequestData";
import { IWatermark } from "../@types/spt/utils/IWatermark";
declare class LauncherCallbacks {
    private httpResponse;
    private launcherController;
    private saveServer;
    private watermark;
    constructor(httpResponse: HttpResponse, launcherController: LauncherController, saveServer: SaveServer, watermark: IWatermark);
    connect(): string;
    login(url: string, info: ILoginRequestData, sessionID: string): string;
    register(url: string, info: IRegisterData, sessionID: string): "FAILED" | "OK";
    get(url: string, info: ILoginRequestData, sessionID: string): string;
    changeUsername(url: string, info: IChangeRequestData, sessionID: string): "FAILED" | "OK";
    changePassword(url: string, info: IChangeRequestData, sessionID: string): "FAILED" | "OK";
    wipe(url: string, info: IRegisterData, sessionID: string): "FAILED" | "OK";
    getServerVersion(): string;
    ping(url: string, info: any, sessionID: string): string;
    removeProfile(url: string, info: IRemoveProfileData, sessionID: string): string;
    getCompatibleTarkovVersion(): string;
}
export { LauncherCallbacks };
