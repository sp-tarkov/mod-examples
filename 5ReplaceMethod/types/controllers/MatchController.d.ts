import { TraderHelper } from "../helpers/TraderHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { IEndOfflineRaidRequestData } from "../@types/eft/match/IEndOfflineRaidRequestData";
import { IStartOfflineRaidRequestData } from "../@types/eft/match/IStartOffineRaidRequestData";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { ConfigServer } from "../servers/ConfigServer";
import { IMatchConfig } from "../@types/spt/config/IMatchConfig";
import { IInRaidConfig } from "../@types/spt/config/IInRaidConfig";
import { SaveServer } from "../servers/SaveServer";
import { MatchLocationService } from "../services/MatchLocationService";
export declare class MatchController {
    private saveServer;
    private profileHelper;
    private matchLocationService;
    private traderHelper;
    private configServer;
    matchConfig: IMatchConfig;
    inraidConfig: IInRaidConfig;
    constructor(saveServer: SaveServer, profileHelper: ProfileHelper, matchLocationService: MatchLocationService, traderHelper: TraderHelper, configServer: ConfigServer);
    getEnabled(): boolean;
    getProfile(info: any): IPmcData[];
    private getMatch;
    createGroup(sessionID: string, info: any): any;
    deleteGroup(info: any): void;
    joinMatch(info: any, sessionID: string): any[];
    getGroupStatus(info: any): any;
    startOfflineRaid(info: IStartOfflineRaidRequestData, sessionID: string): void;
    endOfflineRaid(info: IEndOfflineRaidRequestData, sessionID: string): void;
}
