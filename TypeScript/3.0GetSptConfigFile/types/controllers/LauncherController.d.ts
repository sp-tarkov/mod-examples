import { HttpServerHelper } from "../helpers/HttpServerHelper";
import { IChangeRequestData } from "../models/eft/launcher/IChangeRequestData";
import { ILoginRequestData } from "../models/eft/launcher/ILoginRequestData";
import { IRegisterData } from "../models/eft/launcher/IRegisterData";
import { Info } from "../models/eft/profile/IAkiProfile";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { HashUtil } from "../utils/HashUtil";
export declare class LauncherController {
    private hashUtil;
    private saveServer;
    private httpServerHelper;
    private databaseServer;
    private configServer;
    private coreConfig;
    constructor(hashUtil: HashUtil, saveServer: SaveServer, httpServerHelper: HttpServerHelper, databaseServer: DatabaseServer, configServer: ConfigServer);
    connect(): any;
    find(sessionIdKey: string): Info;
    login(info: ILoginRequestData): string;
    register(info: IRegisterData): string;
    private createAccount;
    changeUsername(info: IChangeRequestData): string;
    changePassword(info: IChangeRequestData): string;
    wipe(info: IRegisterData): string;
    getCompatibleTarkovVersion(): string;
}
