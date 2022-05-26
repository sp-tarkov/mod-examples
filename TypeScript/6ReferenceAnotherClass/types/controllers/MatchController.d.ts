import { ProfileHelper } from "../helpers/ProfileHelper";
import { TraderHelper } from "../helpers/TraderHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IEndOfflineRaidRequestData } from "../models/eft/match/IEndOfflineRaidRequestData";
import { IGetProfileRequestData } from "../models/eft/match/IGetProfileRequestData";
import { IStartOfflineRaidRequestData } from "../models/eft/match/IStartOffineRaidRequestData";
import { ConfigServer } from "../servers/ConfigServer";
import { SaveServer } from "../servers/SaveServer";
import { MatchLocationService } from "../services/MatchLocationService";
export declare class MatchController {
    private saveServer;
    private profileHelper;
    private matchLocationService;
    private traderHelper;
    private configServer;
    private matchConfig;
    private inraidConfig;
    constructor(saveServer: SaveServer, profileHelper: ProfileHelper, matchLocationService: MatchLocationService, traderHelper: TraderHelper, configServer: ConfigServer);
    getEnabled(): boolean;
    getProfile(info: IGetProfileRequestData): IPmcData[];
    private getMatch;
    createGroup(sessionID: string, info: any): any;
    deleteGroup(info: any): void;
    joinMatch(info: any, sessionID: string): any[];
    getGroupStatus(info: any): any;
    startOfflineRaid(info: IStartOfflineRaidRequestData, sessionID: string): void;
    endOfflineRaid(info: IEndOfflineRaidRequestData, sessionID: string): void;
}
