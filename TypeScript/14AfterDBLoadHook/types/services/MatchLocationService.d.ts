import { ICreateGroupRequestData } from "@spt-aki/models/eft/match/ICreateGroupRequestData";
import { SaveServer } from "@spt-aki/servers/SaveServer";
import { TimeUtil } from "@spt-aki/utils/TimeUtil";
export declare class MatchLocationService {
    protected timeUtil: TimeUtil;
    protected saveServer: SaveServer;
    protected locations: {};
    constructor(timeUtil: TimeUtil, saveServer: SaveServer);
    createGroup(sessionID: string, info: ICreateGroupRequestData): any;
    deleteGroup(info: any): void;
}
